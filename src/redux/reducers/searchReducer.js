import productApi from "../../api/productApi";
import createSlice from "../../core/createSlice";

let initialState = {
  list: [],
  key: ''
};

export function fetchSearch(keyword) {
  return (dispatch) => {
    productApi.search(keyword)
      .then(res => {
        dispatch({
          type: TYPE.search,
          payload: res.data
        })
      })
  }
}

let { reducer, action, TYPE } = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      // console.log(action);
      // return {
      //   ...state,
      //   list: action.payload
      // }
      state.list = action.payload
    },
  }
})

export default reducer;

export { action };

export { TYPE };