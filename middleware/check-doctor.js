export default function ({ store, redirect }) {
  if (!store.state.authUser || store.state.authUser.usertype !== 'doctor') {
    return redirect('/')
  }
}
