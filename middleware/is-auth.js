// This middleware checking that if user logged, but in store state 'authUser' is empty, $auth.loggedIn = false
export default function({ $auth, store }) {
  if ($auth.loggedIn && !store.state.authUser) {
    $auth.logout()
  }
}
