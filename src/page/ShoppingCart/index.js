import cartApi from 'api/cartApi';
import useInputValidate from 'core/hook/useInputValidate';
import withPriceFormat from 'hoc/withPriceFormat';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from './components/CartItem';

export default function ShoppingCart() {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  let { Input: InputCouponCode, submit, value: code } = useInputValidate('', { required: true, min: 3 })

  let [codeMesssage, setCodeMessage] = useState();

  let amount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.amount)
  let tax = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.tax * cart.amount / 100)
  let total = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.amount + cart.tax * cart.amount / 100)

  function applyCounponCode() {
    let error = submit();
    // console.log(error)
    if (!error) {
      cartApi.applyCode(code)
        .then(res => {
          setCodeMessage('Bạn đã thêm Coupon Code thành công')
        }, error => {

        })
    }
  }

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h3 className="mb-10 text-center">Shopping Cart</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-7">
            {/* List group */}
            <ul className="list-group list-group-lg list-group-flush-x mb-6">
              {
                cart.list.map(e => <React.Fragment key={e._id}>{withPriceFormat(CartItem, e)}</React.Fragment>)
              }
            </ul>
            {/* Footer */}
            <div className="row align-items-end justify-content-between mb-10 mb-md-0c">
              <div className="col-12 col-md-7">
                {/* Coupon */}
                <label className="font-size-sm font-weight-bold" htmlFor="cartCouponCode">
                  Coupon code:
              </label>
                <div className="row form-row">
                  <div className="col">
                    {/* Input */}
                    {<InputCouponCode placeholder="Enter coupon code*" />}
                    {
                      codeMesssage && <div className="green-message">{codeMesssage}</div>
                    }
                    {/* <input className="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*" /> */}
                  </div>
                  <div className="col-auto">
                    {/* Button */}
                    <button className="btn btn-sm btn-dark" type="submit" onClick={applyCounponCode}>
                      Apply
                  </button>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-md-auto" style={{ marginTop: '30px' }}>
                <button className="btn btn-sm btn-outline-dark">Update Cart</button>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
            {/* Total */}
            <div className="card mb-7 bg-light">
              <div className="card-body">
                <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                  <li className="list-group-item d-flex">
                    <span>Subtotal</span> <span className="ml-auto font-size-sm">{amount}</span>
                  </li>
                  <li className="list-group-item d-flex">
                    <span>Tax</span> <span className="ml-auto font-size-sm">{tax}</span>
                  </li>
                  <li className="list-group-item d-flex font-size-lg font-weight-bold">
                    <span>Total</span> <span className="ml-auto font-size-sm">{total}</span>
                  </li>
                  <li className="list-group-item font-size-sm text-center text-gray-500">
                    Shipping cost calculated at Checkout *
              </li>
                </ul>
              </div>
            </div>
            {/* Button */}
            <Link className="btn btn-block btn-dark mb-2" to="/checkout">Proceed to Checkout</Link>
            {/* Link */}
            <Link className="btn btn-link btn-sm px-0 text-body" to="/catalog">
              <i className="fe fe-arrow-left mr-2" /> Continue Shopping
        </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
