export const FETCH_CUSTOMERS_PENDING = 'FETCH_CUSTOMERS_PENDING';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_ERROR = 'FETCH_CUSTOMERS_ERROR';
export const FILTER_CUSTOMERS = 'FILTER_CUSTOMERS';
export const LOAD_CUSTOMERS = 'LOAD_CUSTOMERS';

export function filterCustomers(text) {
    return {
        type: FILTER_CUSTOMERS,
        payload: text
    };
}

export function loadCustomers(customers) {
    return {
        type: LOAD_CUSTOMERS,
        payload: customers
    };
}

export function isLoadPending(){
    return {
        type: FETCH_CUSTOMERS_PENDING
    }
}

export function loadFailed(message){
    return {
        type: FETCH_CUSTOMERS_ERROR,
        payload: message
    }
}
