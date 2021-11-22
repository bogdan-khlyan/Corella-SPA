let loggedIn, socket, socketHotfix
let jwt = localStorage.getItem('jwt')
let isAdmin = (localStorage.getItem('isAdmin') === "true")
let username = localStorage.getItem('username')

if (username && isAdmin !== undefined && jwt) {
    loggedIn = true
} else {
    loggedIn = false
    isAdmin = false
    username = ''
    jwt = ''
    socket = {}
    socketHotfix = {}
}

const state = () => ({
    loggedIn,
    jwt,
    isAdmin,
    username
})

const mutations = {
    login (state, {jwt, username, isAdmin}) {
        localStorage.setItem('jwt', jwt)
        localStorage.setItem('username', username)
        localStorage.setItem('isAdmin', isAdmin)
        state.loggedIn = true
        state.jwt = jwt
        state.isAdmin = isAdmin
        state.username = username
    },
    logout (state) {
        localStorage.removeItem('jwt')
        localStorage.removeItem('username')
        localStorage.removeItem('isAdmin')
        state.loggedIn = false
        state.jwt = null
        state.isAdmin = null
        state.username = null
    }
}

const actions = {
}

export default { state, mutations, actions }
