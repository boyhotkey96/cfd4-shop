import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import withPriceFormat from '../hoc/withPriceFormat'
import { removeItemCart, cartDecrement, cartIncrement } from '../redux/reducers/cartReducer'

export default function ModelCart() {

  const cart = useSelector(state => state.cart)
  // console.log(cart)

  let amount = new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(cart.amount)

  let history = useHistory();

  function linkCheckout(e) {
    window.document.getElementById('modalShoppingCart').dispatchEvent(new Event('click'))
    if (cart.num === 0) {
      history.push('/catalog')
      return e.preventDefault();
    }
  }

  return ReactDOM.createPortal(
    <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ({cart.num})</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            {
              cart.list.map(e => withPriceFormat(CartItem, e))

              // cart.list.map(e => {
              //   return withPriceFormat(CartItem, e)
              //   return <React.Fragment key={e._id}>{withPriceFormat(CartItem, e)}</React.Fragment>
              // })

              // cart.list.map(e => <CartItem key={e._id} {...e} />)
            }
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong> <strong className="ml-auto">{amount}</strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <Link className="btn btn-block btn-dark" to="/checkout" onClick={linkCheckout}>Continue to Checkout</Link>
            <NavLink className="btn btn-block btn-outline-dark" to="/shopping-cart" onClick={linkCheckout}>View Cart</NavLink>
          </div>
        </div>
        {/* Empty cart (remove `.d-none` to enable it) */}
        <div className="modal-content d-none">
          {/* Close */}
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ({cart.num})</strong>
          </div>
          {/* Body */}
          <div className="modal-body flex-grow-0 my-auto">
            {/* Heading */}
            <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
            {/* Button */}
            <a className="btn btn-block btn-outline-dark" href="#!">
              Continue Shopping
        </a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('root2')
  )
}

function CartItem({ name, images, real_price_text, _id, cartNum }) {
  const dispatch = useDispatch();
  // console.log(cartNum)

  function remove(e) {
    e.preventDefault();
    dispatch(removeItemCart(_id, cartNum));
  }
  
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product.html">
            <img className="img-fluid" src={images?.[0]?.medium_url} alt="..." />
          </a>
        </div>
        <div className="col-8">
          {/* Title */}
          <p className="font-size-sm font-weight-bold mb-6">
            <a className="text-body" href="./product.html">{name}</a> <br />
            <span className="text-muted">{real_price_text}</span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            {/* <select className="custom-select custom-select-xxs w-auto">
              <option value={1}>1</option>
              <option value={1}>2</option>
              <option value={1}>3</option>
            </select> */}
            <button className="cartItem-button" onClick={() => dispatch(cartDecrement(_id))}>-</button>
            <input className="cartItem-num" type="text" value={cartNum} />
            <button className="cartItem-button" onClick={() => dispatch(cartIncrement(_id))}>+</button>
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={remove} >
              <i className="fe fe-x" /> Remove
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}