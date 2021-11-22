import axios from 'axios'
import store from '../../../store'
import Notification from 'element-ui/packages/notification/src/main'
import {copyDeep} from "../../../utils/default";

export default class Issue {

    getIssueById (projectId, issueId) {
        if (store.state.project.issues.find(item => item._id === issueId))
            return Promise.resolve()
        return axios.get(`/project/${projectId}/issue/${issueId}`).then(response => {
            store.commit('pushIssue', response.data)
        })
    }

    create (projectId, issue) {
        let data = copyDeep(issue)
        delete data.versionId // TODO
        return axios.put(`/project/${projectId}/issue`, issue)
    }

    update (projectId, data) {
        return axios.patch(`/project/${projectId}/issue/${data._id}`, data).then(response => {
            console.log(response)
            store.commit('updateIssue', response.data)
            Notification.success({ title: 'Success', message: 'The issue has been updated' })
        }).catch(e => {
            if (e.response.data.message) Notification.error({ title: 'Ошибка', message: e.response.data.message })
            else Notification.error({ title: 'Error', message: 'The task was not updated' })
        })
    }

    // deleteIssue(projectId, issueId){
    //     return axios.delete(`/projects/${projectId}/issues/${issueId}`)
    // }

}
