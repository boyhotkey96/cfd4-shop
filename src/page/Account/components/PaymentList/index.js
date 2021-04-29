import React from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import PaymentItem from './PaymentItem'

export default function PaymentList() {
  let match = useRouteMatch()

  let list = [
    {
      type: 'Debit / Credit Card',
      id: '4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)',
      date: 'Feb 2022',
      name: 'Daniel Robinson'
    }
  ]
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        {list.map(e => (
          <div className="col-12 col-lg-6" key={e.id}>
            {/* Card */}
            <PaymentItem {...e} />
          </div>
        ))}
        <div className="col-12">
          {/* Button */}
          <Link className="btn btn-block btn-lg btn-outline-border" to={`${match.path}/create`}>
            Add Payment Method <i className="fe fe-plus" />
          </Link>
        </div>
      </div>
    </div>
  )
}