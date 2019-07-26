import {createStore} from 'redux';
import reducer from './reducers/reducer';

const emptyState = {
    customers: [],
    isLoading: false
}

export default createStore(reducer, emptyState);