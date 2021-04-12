
const pageApi = {
  contact: (form) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      })
      // reject({
      //   error: 'Hệ thống bị lỗi vui lòng liên hệ sau'
      // })
    })
  }
}

export default pageApi;