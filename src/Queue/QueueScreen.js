import React from 'react';
import base64 from 'base-64';
import Customer from './components/Customer';
import FilterInput from './components/FilterInput';
import { FormattedTime } from '../common/date-utils';
import { ImageHashByEmail } from '../common/gravatar-helper';
import { connect } from 'react-redux';
import {filterCustomers, loadCustomers, isLoadPending, loadFailed} from '../actions/actions';

class QueueScreen extends React.Component {
    constructor() {
        super();
        this.filterEl = React.createRef();
    }

    componentDidMount() {
        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + base64.encode("codetest1:codetest100"));
        this.fetchQueueData(headers, true);

        // call the queue api every 30 seconds to update the list
        setInterval(() => this.fetchQueueData(headers), 30000);
    }

    fetchQueueData = (headers, isFirstTime = false) => {
        // only want to show loading message the first time
        // 30 seconds referesh should happen in the background
        if (isFirstTime){
            this.props.isLoadPending()
        }

        // can make this queue selection dynamic too, but chose not to at this point
        fetch(`api/queue/gj9fs`, {
            method: 'GET',
            headers
        })
        .then(response => response.json())
        .then(json => {
            if(json.status !== "ok"){
                this.props.loadFailed(json.status)
            } else{
                const allCustomers = json.queueData.queue.customersToday;
                this.props.loadCustomers(allCustomers)
            }
        });
    }

    handleCustomerFilter = () => {
        const filterText = this.filterEl.current.value;
        this.props.filterCustomers(filterText);
    }

    render() {
        let customers = [];
        if(this.props.filteredCustomers && this.props.filteredCustomers.length > 0){
            for(let i = 0; i < this.props.filteredCustomers.length; ++i) {
                customers.push(this.props.filteredCustomers[i]);
            }
        }

        let content;
        if(customers.length > 0) {
            content = (<React.Fragment>
                {
                    customers.map((c, index) => {
                        return <Customer 
                            key={index} 
                            name={c.customer.name} 
                            imageHash={ImageHashByEmail(c.customer.emailAddress)} 
                            expectedTime={FormattedTime(c.expectedTime)}/>
                    })
                }
            </React.Fragment>)
        } else {
            content = <h4>No customers!</h4>
        }

        return (
            <div id="main-component">
                { this.props.isLoading
                    ? <h2 id='loading-message'>Loading...</h2>
                    : this.props.hasError && !this.props.isLoading
                        ? <h2>{this.props.message}</h2> 
                        : (<React.Fragment>
                                <FilterInput placeholder="filter by..." onChange={this.handleCustomerFilter} ref={this.filterEl}></FilterInput>
                                <div id="content-section">
                                    {content}
                                </div>
                            </React.Fragment>)
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filterText: state.filterText,
        filteredCustomers: state.filteredCustomers,
        customers: state.customers,
        isLoading: state.isLoading,
        hasError: state.hasError,
        message: state.message
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
          filterCustomers: (text) => {
              dispatch(filterCustomers(text));
          },
          loadCustomers: (customers) => {
              dispatch(loadCustomers(customers));
          },
          isLoadPending: () => {
              dispatch(isLoadPending());
          },
          loadFailed: (message) => {
              dispatch(loadFailed(message));
          }
      };
  };

export default connect(mapStateToProps, mapDispatchToProps)(QueueScreen);
