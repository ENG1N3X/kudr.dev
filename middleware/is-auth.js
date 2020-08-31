// This middleware checking that if user have token - autologin, other automatic logout
export default function({ $auth, store }) {
  console.log('is-auth middleware in process...')

  const token = $auth.$storage.getLocalStorage('token')

  if (token) {
    if (!$auth.loggedIn) {
      autoLogin(store, token)
    } else if ($auth.loggedIn && !$auth.user.id) {
      autoLogin(store, token)
    }
  } else if (!token) {
    if ($auth.loggedIn && !$auth.user.id) {
      $auth.logout()
      $auth.$storage.setLocalStorage('token', null)
    }
  } else {
    console.log('How did you get here?')
  }
}

async function autoLogin(store, token) {
  try {
    await store.commit('CLEAR_ERROR')
    await store.dispatch('autoLogin', token)
    console.log(`Found token - ${token}, try to auth`)
  } catch (e) {
    console.error(e)
  }
}
