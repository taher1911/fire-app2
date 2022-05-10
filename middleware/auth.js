export default function ({ store, route, redirect }) {
  if (route.path !== '/signin') {
    if (process.client) {
      const auth = JSON.parse(localStorage.getItem('auth'))
      console.log(auth)
      // store.commit('SET_USER', auth)
    }
    if (!store.state.user) {
      return redirect('/signin')
    }
  } else if (route.path === '/signin') {
    if (store.state.user) {
      return redirect('/')
    }
  }
}
