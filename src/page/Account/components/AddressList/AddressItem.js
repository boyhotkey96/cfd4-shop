import React from 'react'

export default function AddressItem({ name, street1, street2, district, num, country, zipCode }) {
  return (
    <div className="card-body">
      {/* Heading */}
      <h6 className="mb-6">
        {name}
      </h6>
      {/* Text */}
      <p className="text-muted mb-0">
        {street1} <br />
        {street2} <br />
        {district} <br />
        {num} <br />
        {country} <br />
        {zipCode}
      </p>
      {/* Action */}
      <div className="card-action card-action-right">
        {/* Button */}
        <a className="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
          <i className="fe fe-edit-2" />
        </a>
        {/* Button */}
        <button className="btn btn-xs btn-circle btn-white-primary">
          <i className="fe fe-x" />
        </button>
      </div>
    </div>
  )
}
