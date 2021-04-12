import { domain } from "./config"

const userApi = {
  login: (data) => {
    return fetch(`${domain}elearning/v4/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  register: (data) => {
    return fetch(`${domain}elearning/v4/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}

export default userApi;