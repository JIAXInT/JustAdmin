import request from '..'

const getHome = () =>
  request
    .request({
      url: '/home/multidata'
    })
    .then((res) => {
      console.log(res)
    })

export default getHome
