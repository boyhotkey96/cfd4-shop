import React from 'react'

export default function StoreLocator() {
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h3 className="mb-10 text-center">Store Locator</h3>
            {/* Search */}
            <div className="input-group input-group-merge">
              <input className="form-control" type="search" placeholder="Enter Country or City" />
              <div className="input-group-append">
                <button className="btn btn-outline-border" type="submit">
                  <i className="fe fe-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
