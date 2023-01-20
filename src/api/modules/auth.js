export default (http) => ({
  signIn(data) {
    return http.post('/signin', { data })
  },
  getMe() {
    return http.get('/users/me')
  },
})
