import React from 'react'

export default function Step1({ nextStep }) {
  return (
    <>
      {/* Card */}
      <div className="form-group card card-sm border">
        <div className="card-body">
          {/* Radio */}
          <div className="custom-control custom-radio">
            {/* Input */}
            <input className="custom-control-input collapsed" id="checkoutPaymentCard" name="payment" type="radio" defaultChecked />
            {/* Label */}
            <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
              I want to add Debit / Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
            </label>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="form-group card card-sm border">
        <div className="card-body">
          {/* Radio */}
          <div className="custom-control custom-radio">
            {/* Input */}
            <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" />
            {/* Label */}
            <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
              I want to add PayPall <img src="/img/brands/color/paypal.svg" alt="..." />
            </label>
          </div>
        </div>
      </div>
      {/* Button */}
      <button className="btn btn-dark" type="submit" onClick={nextStep}>
        Continue <i className="fe fe-arrow-right ml-2" />
      </button>
    </>
  )
}