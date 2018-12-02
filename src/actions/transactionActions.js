import { FETCH_TRANSACTIONS, NEW_TRANSACTION } from './types';

export const fetchTransactions = () => dispatch => {
        fetch("http://localhost:4001")
    // fetch("https://warm-wave-52595.herokuapp.com/")
    .then(res => res.json())
    .then(transactions => 
        dispatch({
      transactions: transactions,
      total: transactions.reduce( (a, b) => {
        if (b.category === 'Income') {
          return a + b.amount;
        } else {
          return a + b.amount * -1;
        }
      }, 0)
    }));
}