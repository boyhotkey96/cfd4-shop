import pageApi from 'api/pageApi'
import InputGroup from 'components/InputGroup'
import TextareaGroup from 'components/TextareaGroup'
import useFormValidate from 'core/hook/useFormValidate'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {

  let { form, submit, inputChange, error } = useFormValidate({
    name: '',
    email: '',
    title: '',
    message: '',
  }, {
    rule: {
      name: { required: true },
      email: { required: true, pattern: 'email' },
      title: { required: true },
      message: { required: true, min: 50 },
    },
    message: {}
  })

  let [errorMessage, setErrorMessage] = useState('')
  let [message, setMessage] = useState('')

  function _submit() {
    let error = submit();
    if (Object.keys(error).length === 0) {
      pageApi.contact(form)
        .then(res => {
          if (res.success) {
            setMessage('Gửi liên hệ thành công, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!')
          }
        }, res => {
          setErrorMessage(res.error)
        })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <section className="pt-7 pb-12 contact-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h3 className="mb-10 text-center">Contact Us</h3>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-xl-3">
            <aside className="mb-9 mb-md-0">
              {/* Heading */}
              <h6 className="mb-6">
                <i className="fe fe-phone text-primary mr-4" /> Call to Us:
          </h6>
              {/* Text */}
              <p className="text-gray-500">
                We're available from 10 am - 10 pm EST,
                7 days a week.
          </p>
              <p>
                <strong>Customer Service:</strong><br />
                <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
              </p>
              <p className="mb-0">
                <strong>Careers:</strong><br />
                <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
              </p>
              {/* Divider */}
              <hr />
              {/* Heading */}
              <h6 className="mb-6">
                <i className="fe fe-mail text-primary mr-4" /> Write to Us:
          </h6>
              {/* Text */}
              <p className="text-gray-500">
                Fill out our form and we will contact you
                within 24 hours.
          </p>
              <p>
                <strong>Customer Service:</strong><br />
                <a className="text-gray-500" href="mailto:customer@example.com">customer@example.com</a>
              </p>
              <p className="mb-0">
                <strong>Careers:</strong><br />
                <a className="text-gray-500" href="mailto:careers@example.com">careers@example.com</a>
              </p>
              {/* Divider */}
              <hr />
              {/* Heading */}
              <h6 className="mb-6">
                <i className="fe fe-mail text-primary mr-4" /> Find Us:
          </h6>
              {/* Text */}
              <p className="mb-0 text-gray-500">
                Want to visit our Offline Stores?
          </p>
              {/* Button */}
              <p className="mb-0">
                <Link className="btn btn-link px-0 text-body" to="/store-locator">
                  Go to Store Locator <i className="fe fe-arrow-right ml-2" />
                </Link>
              </p>
            </aside>
          </div>
          <div className="col-12 col-md-8">
            {/* Form */}
            {
              message && <p className="message">{message}</p>
            }
            {
              errorMessage && <p className="error-message">{errorMessage}</p>
            }
            {/* Email */}
            <InputGroup inputChange={inputChange} name="name" title="Name *" error={error} form={form} />
            {/* Email */}
            <InputGroup inputChange={inputChange} name="email" title="Email *" error={error} form={form} />
            {/* Email */}
            <InputGroup inputChange={inputChange} name="title" title="Title *" error={error} form={form} />
            {/* Email */}
            <TextareaGroup inputChange={inputChange} name="message" title="Message *" error={error} form={form} />
            <p style={{ textAlign: 'right' }}>
              {form.message.length}/50
              </p>
            {/* Button */}
            <button className="btn btn-dark" onClick={_submit}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}
