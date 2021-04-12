import React, { useEffect, useRef, useState } from "react";

let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexUrlFacebook = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export default function useInputValidate(initialValue, rule, message) {
  let [value, setValue] = useState(initialValue);

  let [error, setError] = useState();

  let inputRef = useRef()

  function inputChange(event) {
    setValue(event.target.value)
  }

  useEffect(() => {
    inputRef.current.focus()
}, [value])

  function submit() {
    inputRef.current.classList.remove('error-input')
    let errorT;

    // if (rule.pattern) {
    //   let pattern = rule.pattern;
    //   if (pattern === "email") pattern = regexEmail;
    //   if (pattern === "phone") pattern = regexPhone;
    //   if (pattern === "url") pattern = regexUrlFacebook;

    //   if (!pattern.test(value)) {
    //     errorT = message?.pattern || "Không đúng định dạng yêu cầu";
    //   }
    // }

    if (rule.required) {
      if (!value) {
        errorT = message?.required || "Trường này không được để trống";
      }
    }

    if (rule.min && value?.length < rule.min) {
      errorT = message?.min || `Trường này phải dài hơn ${rule.min} ký tự`
    }

    if (rule.max && value?.length > rule.max) {
      errorT = message?.max || `Trường này phải ngắn hơn ${rule.max} ký tự`
    }

    if (errorT) {
      inputRef.current.classList.add('error-input')
    }

    setError(errorT)
    return errorT
  }

  let Input = ({ placeholder }) => (
    <div>
      <input style={{ padding: '0 1rem' }} placeholder={placeholder} className="form-control" ref={inputRef} value={value} type="text" onChange={inputChange} />
      {error && <p className="error-text">{error}</p>}
    </div>
  )

  return {
    Input,
    submit,
    value
  }
}

