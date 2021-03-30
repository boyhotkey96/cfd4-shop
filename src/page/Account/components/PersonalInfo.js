import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import InputGroup from '../../../components/InputGroup';
import useFormValidate from '../../../core/hook/useFormValidate';
import { userLogout, userUpdate } from '../../../redux/reducers/authReducer';

export default function PersonalInfo() {

  const dispatch = useDispatch();

  // const auth = useSelector(state => state.auth);
  // if (!auth.login) {
  //   return <Redirect to="/auth" />
  // }

  function _btnLogout(e) {
    e.preventDefault();
    dispatch(userLogout());
  }

  const auth = useSelector(state => state.auth);

  let { form, error, inputChange, submit } = useFormValidate({
    name: auth.user.name,
    email: auth.user.email,
    current_password: '',
    new_password: '',
  }, {
    rule: {
      name: {
        required: true
      },
      email: {
        required: true,
        pattern: 'email'
      },
      new_password: {
        required: true,
        min: 6,
        max: 32,
      }
    },
    message: {}
  })

  function _submitClick() {
    let error;
    if (form.current_password === '') {
      error = submit({ exclude: { new_password: 1 } })
    } else {
      error = submit();
    }
    if (Object.keys(error).length === 0) {
      // alert('Thành công');
      dispatch(userUpdate(form));
    }
  }

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
                <Route className="list-group-item list-group-item-action dropright-toggle active" path="/account" exact component={PersonalInfo}>
                  Personal Info
            </Route>
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                  Addresses
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                  Payment Methods
            </a>
                <a className="list-group-item list-group-item-action dropright-toggle" href="#!" onClick={_btnLogout}>
                  Logout
            </a>
              </div>
            </nav>
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Name */}
            <div className="row">
              <div className="col-12 col-md-12">
                {/* FirstName */}
                <InputGroup name="name" title="Name *" form={form} inputChange={inputChange} error={error} />
              </div>

              <div className="col-12">
                {/* Email */}
                <InputGroup disabled name="email" title="Email *" form={form} inputChange={inputChange} error={error} />
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <InputGroup name="current_password" type="password" title="Password" form={form} inputChange={inputChange} error={error} />
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <InputGroup name="new_password" type="password" title="New Password" form={form} inputChange={inputChange} error={error} />
              </div>
              <div className="col-12 col-lg-6">
                {/* Birthday */}
                <div className="form-group">
                  {/* Label */}
                  <label>Date of Birth</label>
                  {/* Inputs */}
                  <div className="form-row">
                    <div className="col-auto">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountDate">
                        Date
                    </label>
                      <select className="custom-select custom-select-sm" id="accountDate">
                        <option>10</option>
                        <option>11</option>
                        <option selected>12</option>
                      </select>
                    </div>
                    <div className="col">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountMonth">
                        Month
                    </label>
                      <select className="custom-select custom-select-sm" id="accountMonth">
                        <option>January</option>
                        <option selected>February</option>
                        <option>March</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountYear">
                        Year
                    </label>
                      <select className="custom-select custom-select-sm" id="accountYear">
                        <option>1990</option>
                        <option selected>1991</option>
                        <option>1992</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Gender */}
                <div className="form-group mb-8">
                  <label>Gender</label>
                  <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-sm btn-outline-border active">
                      <input type="radio" name="gender" defaultChecked /> Male
                  </label>
                    <label className="btn btn-sm btn-outline-border">
                      <input type="radio" name="gender" /> Female
                  </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button className="btn btn-dark" type="submit" onClick={_submitClick}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
