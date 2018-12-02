import { FETCH_TRANSACTIONS, NEW_TRANSACTIONS } from '../actions/types';

const initialState = {
    transactions: [],
    transaction: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}