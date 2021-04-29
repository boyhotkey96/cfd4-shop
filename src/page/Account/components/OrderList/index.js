import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Order from '../Order'

export default function OrderList() {

  let list = [
    {
      id: '673290789',
      date: '01 Oct, 2019',
      status: 'Awating Delivery',
      amount: '$259.00',
      item: [
        {
          image: '/img/products/product-5.jpg'
        },
        {
          image: '/img/products/product-112.jpg'
        },
        {
          image: '/img/products/product-7.jpg'
        },
        {
          image: '/img/products/product-5.jpg'
        },
        {
          image: '/img/products/product-5.jpg'
        },
      ]
    },
    {
      id: '871090437',
      date: '25 Sep, 2019',
      status: 'In Processing',
      amount: '$75.00',
      item: [
        {
          image: '/img/products/product-11.jpg'
        },
      ]
    },
    {
      id: '891230563',
      date: '07 Sep, 2019',
      status: 'Delivered',
      amount: '$69.00',
      item: [
        {
          image: '/img/products/product-14.jpg'
        },
        {
          image: '/img/products/product-15.jpg'
        },
      ]
    }
  ]

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Order */}
      {
        list.map(e => <OrderItem key={e.id} {...e} />)
      }

      {/* Order */}
      {/* Pagination */}
      <nav className="d-flex justify-content-center justify-content-md-end mt-10">
        <ul className="pagination pagination-sm text-gray-400">
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">4</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">5</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">6</a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}



function OrderItem({ id, date, status, amount, item }) {
  let match = useRouteMatch()
  return (
    <div className="card card-lg mb-5 border">
      <div className="card-body pb-0">
        {/* Info */}
        <div className="card card-sm">
          <div className="card-body bg-light">
            <div className="row">
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Order No:</h6>
                {/* Text */}
                <p className="mb-lg-0 font-size-sm font-weight-bold">
                  {id}
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                {/* Text */}
                <p className="mb-lg-0 font-size-sm font-weight-bold">
                  <time dateTime="2019-10-01">
                    {date}
                  </time>
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Status:</h6>
                {/* Text */}
                <p className="mb-0 font-size-sm font-weight-bold">
                  {status}
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                {/* Text */}
                <p className="mb-0 font-size-sm font-weight-bold">
                  {amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="form-row mb-4 mb-lg-0">
              {
                item.slice(0, 3).map(e => (
                  <div className="col-3">
                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.image})` }} />
                  </div>
                ))
              }
              {
                item.length > 3 && (
                  <div className="col-3">
                    {/* Image */}
                    <div className="embed-responsive embed-responsive-1by1 bg-light">
                      <a className="embed-responsive-item embed-responsive-item-text text-reset" href="#!">
                        <div className="font-size-xxs font-weight-bold">
                          +{item.length - 3} <br /> more
                                                </div>
                      </a>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-row">
              <div className="col-6">
                {/* Button */}
                <Link className="btn btn-sm btn-block btn-outline-dark" to={`${match.path}/234`}>
                  Order Details
                                </Link>
              </div>
              <div className="col-6">
                {/* Button */}
                <a className="btn btn-sm btn-block btn-outline-dark" href="#!">
                  Track order
                                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
