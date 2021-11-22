import axios from 'axios'
import store from '../../../store'
import router from '../../../router'

export default class User {

    login (data) {
        return axios.post(`/signin`, data).then(response => {
            store.commit('login', response.data)
        })
    }

    logout () { // TODO
        store.commit('logout')
        router.push('/login')
    }

}
