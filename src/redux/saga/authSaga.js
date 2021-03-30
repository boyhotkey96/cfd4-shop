import { call, put } from "redux-saga/effects";
import userApi from "../../api/userApi";
import { USER } from "../reducers/authReducer";

export function* fetchUserLogin(data) {
  let user = yield call(userApi.login, data.payload);
  // console.log(user);

  if (user.error) {
    yield put({ type: USER.error, payload: user.error })
  } else {
    yield put({ type: USER.login, payload: user.data })
  }
}