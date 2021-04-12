import React from 'react'
import { useDispatch } from 'react-redux'
import { cartDecrement, cartIncrement, removeItemCart } from 'redux/reducers/cartReducer'

export default function CartItem({name, real_price_text, images, _id, cartNum}) {

  const dispatch = useDispatch()

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-3">
          {/* Image */}
          <a href="product.html">
            <img src={images?.[0]?.medium_url} alt="..." className="img-fluid" />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <div className="d-flex mb-2 font-weight-bold">
            <a className="text-body" href="product.html">Cotton floral print</a> <span className="ml-auto">{real_price_text}</span>
          </div>
          {/* Text */}
          <p className="mb-7 font-size-sm text-muted">
            Size: M <br />
                  Color: Red
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
            <div className="font-size-xs text-gray-400 ml-auto" style={{cursor: 'pointer'}} onClick={() => dispatch(removeItemCart(_id))}>
              <i className="fe fe-x" /> Remove
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
