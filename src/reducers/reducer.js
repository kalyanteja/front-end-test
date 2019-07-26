import { FILTER_CUSTOMERS, LOAD_CUSTOMERS, FETCH_CUSTOMERS_ERROR, FETCH_CUSTOMERS_PENDING} from '../actions/actions';
import { List } from 'immutable';

export const initialState = {
    customers: List.of(),
    isLoading: true
};

const reducer = (state = initialState, action) => {
    switch(action.type){
      case FILTER_CUSTOMERS:
        const filterText = action.payload.trim();
        const filteredCustomers = state.customers.filter(cus => {
            return cus.customer.name.toLowerCase().indexOf(filterText) !== -1
        });
        state = {
          ...state,
          filteredCustomers,
          filterText
        }
        break;
      case LOAD_CUSTOMERS:
        const customers = action.payload;
        state = {
          ...state,
          customers: customers,
          filteredCustomers: customers,
          isLoading: false
        }
        break;
      case FETCH_CUSTOMERS_PENDING:
        state = {
          ...state,
          isLoading: true
        }
        break;
      case FETCH_CUSTOMERS_ERROR:
        state = {
          ...state,
          isLoading: false,
          hasError: true,
          message: action.payload
        }
        break;
      default:
        break;
    }

    return state;
};

export default reducer;