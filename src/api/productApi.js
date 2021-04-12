import { domain } from "./config"

const productApi = {
  catalog: (page = 1) => {
    return fetch(`${domain}product?page=${page}`).then(res => res.json())
  },
  search: (keyword = '') => {
    return fetch(`${domain}product?search=${keyword}`).then(res => res.json())
  }
}

export default productApi;