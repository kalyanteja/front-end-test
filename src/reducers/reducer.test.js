import reducer, { initialState } from "./reducer";
import { FILTER_CUSTOMERS, FETCH_CUSTOMERS_PENDING } from "../actions/actions";


describe(`the reducer module`, () => {
    it(`should have the following initialState`, () => {
        expect(initialState).toHaveProperty('customers');
        expect(initialState.customers).toHaveProperty('size', 0);
    });

    it(`should return the initialState on the default case`, () => {
        // Given
        const action = {
            type: 'TEST'
        };

        // When
        const result = reducer(undefined, action);

        // Then
        expect(result).toEqual(initialState)
    });

    it(`should filter customers based on passed filter text`, () => {
        const customers = [
            {
                customer : {
                    name: 'Jack M'
                }
            },
            {
                customer : {
                    name: 'Mark Zuckerberg'
                }
            },
            {
                customer : {
                    name: 'Sundar Pichai'
                }
            }
        ];

        const mockState = {
            customers
        }

        const action = {
            type: FILTER_CUSTOMERS,
            payload: "sun"
        };

        const result = reducer(mockState, action);
        expect(result.filteredCustomers.length).toEqual(1)
    });

    it(`while fetching data, state should be isLoading`, () => {
        const action = {
            type: FETCH_CUSTOMERS_PENDING
        };

        const result = reducer(initialState, action);
        expect(result.isLoading).toEqual(true)
    });
});
