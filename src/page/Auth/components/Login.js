import React from 'react'
import useFormValidate from 'core/hook/useFormValidate';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import { login } from 'redux/reducers/authReducer';

const styles = {
  inputError: {
    color: 'red',
    fontSize: 13,
    fontStyle: 'italic',
  }
}

export default function Login() {

  let { error, form, inputChange, submit } = useFormValidate(
    {
      username: '',
      password: '',
    }, {
    rule: {
      username: {
        required: true,
      },
      password: {
        required: true,
      }
    },
    message: {
      username: {
        required: 'Username không được để trống'
      },
      password: {
        required: 'Password không được để trống'
      }
    }
  }
  )

  const dispatch = useDispatch();

  function _btnLogin() {
    let error = submit();
    if (Object.keys(error).length === 0) {
      dispatch(login(form));
    }
  }

  const auth = useSelector(state => state.auth)
  // console.log(auth)
  if (auth.user) {
    return <Redirect to="/" />
  }

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Returning Customer</h6>
          {auth.error && <p style={styles.inputError} className="text-error">{auth.error}</p>}
          {/* Form */}
          <div className="row">
            <div className="col-12">
              {/* Email */}
              <div className="form-group">
                <label className="sr-only" htmlFor="loginEmail">
                  Email Address *
                    </label>
                <input className="form-control form-control-sm" id="loginEmail" type="text" name="username" placeholder="Email Address *" value={form.username} onChange={inputChange} />
                {error.username && <p style={styles.inputError} className="text-error">{error.username}</p>}
              </div>
            </div>
            <div className="col-12">
              {/* Password */}
              <div className="form-group">
                <label className="sr-only" htmlFor="loginPassword">
                  Password *
              </label>
                <input className="form-control form-control-sm" id="loginPassword" type="password" name="password" placeholder="Password *" value={form.password} onChange={inputChange} />
                {error.password && <p style={styles.inputError} className="text-error">{error.password}</p>}
              </div>
            </div>
            <div className="col-12 col-md">
              {/* Remember */}
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="loginRemember" type="checkbox" />
                  <label className="custom-control-label" htmlFor="loginRemember">
                    Remember me
                      </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              {/* Link */}
              <div className="form-group">
                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                      Password?</a>
              </div>
            </div>
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-sm btn-dark" type="submit" onClick={_btnLogin}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
