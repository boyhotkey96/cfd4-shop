import React from 'react'

export default function PaymentItem({ type, id, date, name }) {
  return (
    <div className="card card-lg bg-light mb-8">
      <div className="card-body">
        {/* Heading */}
        <h6 className="mb-6">
          {type}
        </h6>
        {/* Text */}
        <p className="mb-5">
          <strong>Card Number:</strong> <br />
          <span className="text-muted">{id}</span>
        </p>
        {/* Text */}
        <p className="mb-5">
          <strong>Expiry Date:</strong> <br />
          <span className="text-muted">{date}</span>
        </p>
        {/* Text */}
        <p className="mb-0">
          <strong>Name on Card:</strong> <br />
          <span className="text-muted">{name}</span>
        </p>
        {/* Action */}
        <div className="card-action card-action-right">
          {/* Button */}
          <a className="btn btn-xs btn-circle btn-white-primary" href="account-payment-edit.html">
            <i className="fe fe-edit-2" />
          </a>
          {/* Button */}
          <button className="btn btn-xs btn-circle btn-white-primary">
            <i className="fe fe-x" />
          </button>
        </div>
      </div>
    </div>
  )
}
