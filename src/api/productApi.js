import { domain } from "./config"

const productApi = {
  catalog: (page) => {
    return fetch(`${domain}product?${page}`).then(res => res.json())
  },
  search: (keyword = '') => {
    return fetch(`${domain}product?search=${keyword}`).then(res => res.json())
  },
  detail: (slug) => {
    return fetch(`${domain}product?slug=${slug}`).then(res => res.json())
  }
}

export default productApi;