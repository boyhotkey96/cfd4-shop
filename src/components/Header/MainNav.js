import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

export default function MainNav() {

  const cart = useSelector(state => state.cart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">Shopper</Link>
        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* Nav */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/catalog">Product</Link>
            </li>
            <li className="nav-item dropdown position-static">
              <Link className="nav-link" data-toggle="dropdown" to="/catalog/women">Women</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/catalog/men">Men</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link"  to="/catalog/kids">Kids</Link>
            </li>
            <li className="nav-item dropdown">
              {/* Toggle */}
              <Link className="nav-link"  to="/contact-us">Contact</Link>
              {/* Menu */}
              {/* <div className="dropdown-menu">
                  <div className="card card-lg">
                      <div className="card-body">
                          <ul className="list-styled font-size-sm">
                              <li className="list-styled-item">
                                  <a className="list-styled-link" to="./blog.html">Blog</a>
                              </li>
                              <li className="list-styled-item">
                                  <a className="list-styled-link" to="./blog-post.html">Blog Post</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div> */}
            </li>
          </ul>
          {/* Nav */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" href="#modalSearch">
                <i className="fe fe-search" />
              </a>
            </li>
            <li className="nav-item ml-lg-n4">
              <Link className="nav-link" to="/account">
                <i className="fe fe-user" />
              </Link>
            </li>
            <li className="nav-item ml-lg-n4">
              <Link className="nav-link" to="/account/wishlist">
                <i className="fe fe-heart" />
              </Link>
            </li>
            <li className="nav-item ml-lg-n4">
              <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                {
                  cart.num > 0 ? (
                    <span data-cart-items={cart.num}>
                      <i className="fe fe-shopping-cart" />
                    </span>
                  ) : (
                      <span>
                        <i className="fe fe-shopping-cart" />
                      </span>
                    )
                }
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}