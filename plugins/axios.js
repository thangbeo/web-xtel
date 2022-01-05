import Cookies from 'js-cookie'
import APIs from '~/assets/configurations/API_Config'

// Axios interceptor. Auto log out when token is expired or invalid
// export default function(context) {
//   context.$axios.onResponse(response => {
//     const code = response.data.error.code
//     const OK = APIs.responses.OK.code
//     if (
//       code === APIs.responses.TOKEN_EXPIRE.code ||
//       code === APIs.responses.TOKEN_INVALID.code
//     ) {
//       context.app.$logout(context.app.router)
//     } else if (code === OK) {
//       return {
//         error: false,
//         data: response.data
//       }
//     } else {
//       context.app.$showWarnNotify(
//         context.app.router.app,
//         APIs.responses[code].message
//       )
//       context.app.router.app.$log.warn('Có lỗi khi gọi API: ', {
//         response
//       })
//       return {
//         error: true,
//         data: response.data
//       }
//     }
//   })

//   context.$axios.onError(error => {
//     context.app.router.app.$log.error('Có lỗi/exception: ', {
//       error,
//       response: error.response
//     })

//     context.app.$showError(
//       context.app.router.app,
//       'Có lỗi xảy ra khi kết nối đến server'
//     )

//     return {
//       error: true
//     }
//   })
// }
