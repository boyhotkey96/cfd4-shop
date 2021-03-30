import { call } from "redux-saga/effects"
import cartApi from '../../api/cartApi'

export function* cartUpdate(data) {
  // let user = yield call(cartApi.update, data.payload)
  console.log(data)
}