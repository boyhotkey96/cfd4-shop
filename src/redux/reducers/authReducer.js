import userApi from "../../api/userApi";
import createSlice from "../../core/createSlice";

let user = JSON.parse(localStorage.getItem('login'));

let initialState = {
  // login: user ? user : false,
  login: !!user,
  user: user,
  error: null,
}

// const USER = {
//   LOGIN: 'USER_LOGIN',
//   LOGOUT: 'USER_LOGOUT'
// }

// export function userLogin() {
//   return {
//     type: USER.LOGIN
//   }
// }

// export function userLogout() {
//   return {
//     type: USER.LOGOUT

//   }
// }

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case USER.LOGIN:
//       let user = {
//         name: 'Phung Ba Du',
//         email: 'boyhotkey96@gmail.com'
//       }
//       localStorage.setItem('login', JSON.stringify(user));
//       return {
//         ...state,
//         login: true,
//         user
//       }
//     case USER.LOGOUT:
//       localStorage.removeItem('login')
//       return {
//         ...state,
//         login: false,
//         user: null
//       }
//     default:
//       return state;
//   }
// }

// ------------------------------------------------------------------

export function login(data) {
  return (dispatch) => {
    userApi.login(data)
    .then(res => {
      if (res.error) {
        dispatch({type: TYPE.error, payload: res.error})
      } else {
        dispatch({type: TYPE.login, payload: res.data})
      }
    })
  }
}

let {action, reducer, TYPE} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      let user = action.payload;
      let token = action.payload.token;

      localStorage.setItem('login', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
      return {
        ...state,
        login: true,
        user
      }
    },
    logout: (state, action) => {
      localStorage.removeItem('login')
      localStorage.removeItem('token')
      return {
        ...state,
        login: false,
        user: null
      }
    },
    error: function(state, action) {
      return {
        ...state,
        error: action.payload
      }
    }
  }
})

export default reducer;

export const userLogin = action.login;

export const userLogout = action.logout;

export const USER = TYPE;