import { domain } from "./config"

const cartApi = {
  update: (data) => {
    return fetch(`${domain}cart/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  applyCode: (data) => {
    return new Promise((resolve, reject) => {
      resolve({success: true})
    })
  }
}

export default cartApi;