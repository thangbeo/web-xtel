// import ULT from '~/plugins/ult'
// export default function(context) {
//   if (context.req !== undefined) {
//     context.store.commit(
//       'app/ClientPrivateIP',
//       context.req.socket._peername.address
//     )
//   }

//   if (context.route.path === '/login') {
//     context.store.dispatch('login/isAuthenticated', context.req).then(res => {
//       if (res.length !== 0) {
//         context.redirect('/')
//       }
//     })
//   } else {
//     context.store
//       .dispatch('login/isAuthenticated', context.req)
//       .then(res => {
//         if (res.length === 0 || res.length === undefined) {
//           context.redirect('/login')
//         }
//       })
//       .catch(e => {
//         context.redirect('/login')
//       })
//   }
// }
