import { Axios } from './Axios'

function createAxios() {
  return new Axios({
    baseURL: `${process.env.VUE_APP_BACKEND_HOST}/api`,
  })
}

export default createAxios()
