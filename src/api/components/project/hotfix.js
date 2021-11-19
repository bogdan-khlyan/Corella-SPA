import axios from 'axios'
import store from '@/store/index'

export default class Hotfix {

    getHotfixes(projectId) {
        if (store.state.project.hotfixes.find(item => item.projectId === projectId)) {
            return Promise.resolve()
        }
        return axios.get(`/project/${projectId}/hotfixes`).then(response => {
            store.commit('pushHotfixes', response.data.hotfixes.map(item => { // TODO pagination
                return {
                    ...item,
                    projectId: projectId
                }
            }))
        })
    }
    deleteHotfix(projectId, hotfixId) {
        return axios.delete(`/projects/${projectId}/hotfixes/${hotfixId}`)
    }
    updateHotfix(projectId, hotfixId,data){
        return axios.patch(`/projects/${projectId}/hotfixes/${hotfixId}`, data);
    }
}
