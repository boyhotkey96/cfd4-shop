import createSlice from "../../core/createSlice";

let cart = JSON.parse(localStorage.getItem('cart'))

const initialState = {
  list: cart?.list || [],
  num: cart?.num || 0,
  amount: cart?.amount || 0,
  tax: cart?.tax || 10,
  shipping_option: cart?.shipping_option || 'free',
  shipping_price: cart?.shipping_price || 0,
  payment_option: cart?.payment_option || 'paypal',
}

function returnCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
  return cart
}

let { action, reducer, TYPE } = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      let { list, amount } = state;
      let f = list.findIndex(e => e._id === action.payload._id);
      if (f !== -1) {
        list[f].cartNum++;
        amount += list[f].real_price;
      } else {
        // let item = {...action.payload};
        let item = JSON.parse(JSON.stringify(action.payload));
        item.cartNum = 1;
        list.push(item);
        amount += item.real_price;
      }

      return returnCart({
        ...state,
        num: state.num + 1,
        amount,
        list,
      });
    },
    remove: (state, action) => {
      let { list, amount } = state;
      // let stateNumUpdate = state.num - 1;
      let f = list.findIndex(e => e._id === action.payload);
      let stateNumUpdate = list[f].cartNum > 1 ? list[f].cartNum : 1

      if (f !== -1) {
        amount -= list[f].real_price * list[f].cartNum;
        list.splice(f, 1)
      }

      return returnCart({
        ...state,
        num: state.num - stateNumUpdate,
        amount,
        list,
      })
    },
    decrement: (state, action) => {
      let { list, amount } = state;
      let f = list.findIndex(e => e._id === action.payload);
      let stateNumUpdate = list[f].cartNum > 1 ? state.num - 1 : state.num;

      if (f !== -1) {
        if (list[f].cartNum > 1) {
          list[f].cartNum--;
          amount -= list[f].real_price;
        } else {
          // list.splice(f, 1);
        }
      }

      return returnCart({
        ...state,
        num: stateNumUpdate,
        amount,
        list,
      })
    },
    increment: (state, action) => {
      let { list, amount } = state;
      let f = list.findIndex(e => e._id === action.payload);
      if (f !== -1) {
        list[f].cartNum++;
        amount += list[f].real_price;
      }

      return returnCart({
        ...state,
        num: state.num + 1,
        amount,
        list,
      })
    },
    cartUpdate: (state, action) => {
      return returnCart({
        ...state,
        ...action.payload,
      })
    },
    // shippingChange: (state, action) => {
    //   let { shipping_option, shipping_price } = action.payload;

    //   return returnCart({
    //     ...state,
    //     shipping_option,
    //     shipping_price
    //   })
    // },
    // paymentChange: (state, action) => {
    //   let { payment_option } = action.payload;

    //   return returnCart({
    //     ...state,
    //     payment_option,
    //   })
    // },
  }
})

export default reducer;

export const addCart = action.addCart;

export const removeItemCart = action.remove;

export const cartDecrement = action.decrement;

export const cartIncrement = action.increment;

export const cartUpdate = action.cartUpdate;

export const CART = TYPE;

// export const shippingChange = action.shippingChange;

// export const paymentChange = action.paymentChange;