import React from 'react'

export default function AddressList() {
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
            {/* Heading */}
            <h6 className="mb-7">
              Add Address
        </h6>
            {/* Form */}
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input className="form-control" id="firstName" type="text" placeholder="First Name" required />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input className="form-control" id="lastName" type="text" placeholder="Last Name" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="emailAddress">Email Address *</label>
                    <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input className="form-control" id="companyName" type="text" placeholder="Company Name" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input className="form-control" id="country" type="text" placeholder="Country" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="addressLineOne">Address Line 1 *</label>
                    <input className="form-control" id="addressLineOne" type="text" placeholder="Address Line 1" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="addressLineTwo">Address Line 2</label>
                    <input className="form-control" id="addressLineTwo" type="text" placeholder="Address Line 2" required />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label htmlFor="townCity">Town / City *</label>
                    <input className="form-control" id="townCity" type="text" placeholder="Town / City" required />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label htmlFor="zipPostcode">ZIP / Postcode *</label>
                    <input className="form-control" id="zipPostcode" type="text" placeholder="ZIP / Postcode" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="mobilePhone">Mobile Phone *</label>
                    <input className="form-control" id="mobilePhone" type="tel" placeholder="Mobile Phone" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="defaultDeliveryAddress" />
                      <label className="custom-control-label" htmlFor="defaultDeliveryAddress">Default delivery address</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" id="defaultShippingAddress" />
                      <label className="custom-control-label" htmlFor="defaultShippingAddress">Default shipping address</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
              <button className="btn btn-dark" type="submit">
                Add Address
          </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}
