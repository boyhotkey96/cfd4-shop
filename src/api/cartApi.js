import { domain } from "./config"

export default {
  update: (data) => {
    return fetch(`${domain}cart/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then (res => res.json())
  }
}