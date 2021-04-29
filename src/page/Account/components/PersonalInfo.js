import useFormValidate from 'core/hook/useFormValidate'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputGroup from 'components/InputGroup'
import { updateInfo } from 'redux/reducers/authReducer'

export default function PersonalInfo() {

  const auth = useSelector(state => state.auth)
  
  const dispatch = useDispatch()

  let { form, error, inputChange, submit } = useFormValidate({
    first_name: auth.user.first_name,
    last_name: auth.user.last_name,
    password: '',
    new_password: ''
  }, {
    rule: {
      first_name: { required: true },
      last_name: { required: true },
      password: { required: true, min: 6 },
      new_password: {
        required: true,
        match: 'password'
      }
    }
  })

  function _submit() {
    let options = {
      exclude: {}
    }
    if (!form.password) {
      options.exclude = {
        password: 1,
        new_password: 1
      }
    }
    let error = submit(options)
    if (Object.keys(error).length === 0) {
      dispatch(updateInfo(form))
    }
  }

  let yearNow = new Date().getFullYear()
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Form */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Email */}
          <InputGroup form={form} error={error} name="first_name" inputChange={inputChange} title="First Name*" />
        </div>
        <div className="col-12 col-md-6">
          {/* Email */}
          <InputGroup form={form} error={error} name="last_name" inputChange={inputChange} title="Last Name*" />
        </div>
        <div className="col-12">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input className="form-control" type="text" disabled value={auth.user.username} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <InputGroup form={form} error={error} type="password" name="password" inputChange={inputChange} title="Password*" />
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <InputGroup form={form} error={error} type="password" name="new_password" inputChange={inputChange} title="New Passowrd*" />
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
                  {
                    [...Array(31)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                  }
                </select>
              </div>
              <div className="col">
                {/* Date */}
                <label className="sr-only" htmlFor="accountMonth">
                  Month
                    </label>
                <select className="custom-select custom-select-sm" id="accountMonth">
                  {
                    [...Array(12)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                  }
                </select>
              </div>
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountYear">
                  Year
                    </label>
                <select className="custom-select custom-select-sm" id="accountYear">
                  {
                    [...Array(50)].map((e, i) => <option value={yearNow - i} key={i}>{yearNow - i}</option>)
                  }
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
          <button className="btn btn-dark" type="submit" onClick={_submit}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}
