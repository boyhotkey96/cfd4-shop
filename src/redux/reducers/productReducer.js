import productApi from "../../api/productApi";
import createSlice from "../../core/createSlice";

const initialState = {
  products: [],
  paginate: null,
  loading: true,
}

export function getProduct(queryString) {
  return (dispatch) => {
    dispatch(action.loading())
    productApi.catalog(queryString)
      .then(res => {
        dispatch(action.catalog(res))
        // dispatch({ type: TYPE.catalog, payload: res })
      })
  }
}

let { action, reducer, TYPE } = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true
    },
    catalog: (state, action) => {
      // console.log(action)
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        paginate: action.payload.paginate,
      }
    }
  }
})

export default reducer;

// export const getProduct