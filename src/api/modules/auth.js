export default (http) => ({
  signIn(data) {
    return http.post('/signin', { data })
  },
  signout() {
    return http.post('/signout')
  },
  getMe() {
    return http.get('/users/me')
  },
})
