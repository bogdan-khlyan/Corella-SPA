import axios from 'axios'
import store from '../../../store'
import Hotfix from './hotfix'
import Issue from './issue'

export default class Project {

    constructor() {
        this.hotfix = new Hotfix()
        this.issue = new Issue()
    }

    getProjects() {
        return axios.get(`/projects`).then(response => {
            store.commit('projectList', response.data.map(item => {
                return {
                    ...item,
                    columns: []
                }
            }))
        })
    }
    // currentProjectVersions(id){
    //     return axios.get(`/projects/${id}/versions`)
    // }

    getProjectColumns (projectId) {
        if (store.state.project.projectList === null) {
            return this.getProjects()
                .finally(() => { return this.getProjectColumns(projectId) })
        }
        else if (store.state.project.projectList.find(item => item._id === projectId).columns.length !== 0) {
            store.commit('setCurrentProject', projectId)
            return Promise.resolve()
        }
        return axios.get(`/project/${projectId}/columns`).then(response => {
            store.commit('setCurrentProject', projectId)
            store.commit('setProjectColumns', response.data.map(column => {
                return {
                    ...column,
                    // issues: null
                    issues: column.issues.map(issue => {
                        return issue._id
                    })
                }
            }))
        })
    }
    // currentProjectColumns(id) {
    //     return axios.get(`/projects/${id}/columns`)
    // }

    // currentProjectRoles(projectId) {
    //     return axios.get(`/projects/${projectId}/roles/`).then(response => {
    //         store.commit('currentProjectRoles', response.data
    //         )
    //     })
    // }

    // syncCurrentProjectBoard(projectId) {
    //     return axios.get(`/projects/${projectId}/columns`).then(response => {
    //         store.commit('syncCurrentProjectBoard', response.data
    //         )
    //     })
    // }

    uploadFile(projectId, issueId, type, formData, fileType) {
        return axios.post(`/projects/${projectId}/${type}/${issueId}/attach`, formData, {
                headers: {
                    'Content-Type': fileType
                }
            }
        )
    }
}
