import React from 'react'

export default function Payment() {
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
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                  Addresses
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle active" href="account-payment.html">
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
                      Debit / Credit Card
                </h6>
                    {/* Text */}
                    <p className="mb-5">
                      <strong>Card Number:</strong> <br />
                      <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                    </p>
                    {/* Text */}
                    <p className="mb-5">
                      <strong>Expiry Date:</strong> <br />
                      <span className="text-muted">Feb 2022</span>
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                      <strong>Name on Card:</strong> <br />
                      <span className="text-muted">Daniel Robinson</span>
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
              </div>
              <div className="col-12">
                {/* Button */}
                <a className="btn btn-block btn-lg btn-outline-border" href="account-payment-edit.html">
                  Add Payment Method <i className="fe fe-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
