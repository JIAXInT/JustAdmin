import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/home/multidata',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          banners: [
            { image: 'https://example.com/banner1.jpg', link: '/banner1' },
            { image: 'https://example.com/banner2.jpg', link: '/banner2' }
          ],
          recommends: [
            { title: '推荐商品1', price: 100 },
            { title: '推荐商品2', price: 200 }
          ]
        }
      }
    }
  }
] as MockMethod[]
