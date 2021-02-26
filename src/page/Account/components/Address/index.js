import React from 'react'

export default function Address() {
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            {/* Nav */}
            <nav className="mb-10 mb-md-0">
              <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
                  Orders
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-wishlist.html">
                  Widhlist
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">
                  Personal Info
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle active" href="account-address.html">
                  Addresses
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                  Payment Methods
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
                  Logout
            </a>
              </div>
            </nav>
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
              <div className="col-12 col-lg-6">
                {/* Card */}
                <div className="card card-lg bg-light mb-8">
                  <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                      Shipping Address
                </h6>
                    {/* Text */}
                    <p className="text-muted mb-0">
                      Daniel Robinson <br />
                  3997 Raccoon Run <br />
                  Kingston <br />
                  45644 <br />
                  United States <br />
                  6146389574
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
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Card */}
                <div className="card card-lg bg-light mb-8">
                  <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                      Billing Address
                </h6>
                    {/* Text */}
                    <p className="text-muted mb-0">
                      Daniel Robinson <br />
                  3997 Raccoon Run <br />
                  Kingston <br />
                  45644 <br />
                  United States <br />
                  6146389574
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
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <a className="btn btn-block btn-lg btn-outline-border" href="account-address-edit.html">
                  Add Address <i className="fe fe-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
