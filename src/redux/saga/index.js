import { takeEvery, takeLatest } from 'redux-saga/effects'
import { USER } from '../reducers/authReducer'
import { CART, } from '../reducers/cartReducer';
import { fetchUserLogin } from './authSaga'
import { cartUpdate } from './cartSaga';

export default function* saga() {
  // yield takeEvery(USER.fetchLogin, fetchUserLogin);
  yield takeLatest(USER.fetchLogin, fetchUserLogin);
  // yield takeLatest(CART.increment, cartUpdate);
  yield takeLatest([CART.increment, CART.decrement, CART.cartUpdate, CART.remove], cartUpdate);
}