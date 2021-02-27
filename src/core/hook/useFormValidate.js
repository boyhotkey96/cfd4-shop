import React, { useState } from "react";

let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexUrlFacebook = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export default function useFormValidate(initialValue, validate) {
  let [form, setForm] = useState(initialValue);

  function inputChange(e) {
    form[e.target.getAttribute("name")] = e.target.value;
    setForm({ ...form });
  }

  let [error, setError] = useState({});

  function submit() {
    let { rule, message } = validate;
    let errorObject = {};

    for (let i in rule) {
      let r = rule[i];
      // console.log(r);

      if (r.pattern) {
        let pattern = r.pattern;

        if (pattern === "email") pattern = regexEmail;
        if (pattern === "phone") pattern = regexPhone;
        if (pattern === "url") pattern = regexUrlFacebook;
        // console.log(pattern)
        if (!pattern.test(form[i])) {
          errorObject[i] =
            message?.[i]?.pattern || "Không đúng định dạng yêu cầu";
        }
      }
      if (r.required) {
        if (!form[i]) {
          errorObject[i] =
            message?.[i]?.required || "Trường này không được để trống";
        }
      }
      if (r.min && form[i]?.length < r.min && form[i]?.length > 0) {
        errorObject[i] = message?.[i]?.min || `Trường này dài hơn ${r.min} ký tự`
      }
      if (r.max && form[i]?.length > r.max) {
        errorObject[i] = message?.[i]?.max || `Trường này dài hơn ${r.max} ký tự`
      }
    }

    // for (let i in errorObject) {
    //   document.querySelector(`[name="${i}"]`).classList.add('error-input');
    // }

    setError(errorObject);
    return errorObject;
  }

  return {
    form,
    inputChange,
    error,
    submit,
  };
}
