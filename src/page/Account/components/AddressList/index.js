import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import AddressItem from './AddressItem'

export default function AddressList() {
  let list = [
    {
      name: 'Shipping Address',
      street1: 'Daniel Robinson',
      street2: '3997 Raccoon Run',
      district: 'Kingston',
      num: 45644,
      country: 'United States',
      zipCode: '6146389574'
    },
    {
      name: 'Billing Address',
      street1: 'Daniel Robinson',
      street2: '3997 Raccoon Run',
      district: 'Kingston',
      num: 45644,
      country: 'United States',
      zipCode: '6146389574'
    }
  ]
  let match = useRouteMatch()

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        {
          list.map(e => (
            <div className="col-12 col-lg-6" key={e.name}>
              <div className="card card-lg bg-light mb-8">
                <AddressItem {...e} />
              </div>
            </div>
          ))
        }

        <div className="col-12">
          {/* Button */}
          <Link className="btn btn-block btn-lg btn-outline-border" to={`${match.path}/create`}>
            Add Address <i className="fe fe-plus" />
          </Link>
        </div>
      </div>
    </div>
  )
}
