export const fetchUser = () => {
  // check if 'user' key exists in local storage
  // if it does, parse the value as JSON and return it
  // if not, clear the local storage and return undefined
  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear()

  return userInfo
}
