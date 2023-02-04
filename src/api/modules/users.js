export default (http) => ({
  getMe() {
    return http.get('/users/me')
  },

  getUsers(params) {
    return http.get('/users', { params })
  },

  createUser(data) {
    return http.post('/users', { data })
  },

  patchUser(userId, data) {
    return http.patch(`/users/${userId}`, { data })
  },
})
