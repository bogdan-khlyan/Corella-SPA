const state = () => ({
    projectList: null,

    issues: [],
    hotfixes: [],

    currentProjectRoles: null,
    loader: null,
    currentHotfix: null,

    currentProject: null,
    currentIssueId: null,
})

/**
 *
 * [
 *  {
 *      _id: string,
 *      name: string,
 *      description: string,
 *      columns: [
 *          {
 *              id: string, // WTF id???
 *              name: string,
 *              isClosing: boolean,
 *              isStarting: boolean,
 *              limit: number,
 *              issues: [
 *
 *              ]
 *          }
 *      ]
 *  }
 * ]
 *
 * */


const mutations = {
    setProjectColumns (state, data) {
        console.log(JSON.stringify(state.projectList))
        let project = state.projectList
            .find(item => item._id === state.currentProject._id)
        project.columns.push(...data)
    },
    setCurrentProject (state, projectId) {
        state.currentProject = state.projectList.find(item => item._id === projectId)
    },
    pushIssue (state, issue) {
        state.issues.push(issue)
    },
    updateIssue (state, issue) {
        let temp = [...state.issues]
        let index = temp.findIndex(item => item._id === issue._id)
        temp[index] = issue
        state.issues = temp
    },
    pushHotfixes (state, hotfixes) {
        state.hotfixes.push(...hotfixes)
    },

    // setIssue (state, data) {
        // state.projectList
        //     .find(project => project.id === data.projectId).columns.find()
    // },
    // changeStateColumnId (state, data) {
    //     state.state.columnId = data
    // },

    setCurrentIssueId (state, data){
        state.currentIssueId = data
    },






    projectList (state, data) {
        state.projectList = data
    },
    currentProjectRoles(state,payload) {
        state.currentProjectRoles = payload
    },
    syncCurrentProjectBoard(state,payload){
        console.log(payload)
    },
    setLoaderIssue(state, payload){
        state.loader.projectIssue = payload
    },
    setCurrentHotfix(state, payload){
        state.currentHotfix = payload
    }
}

const actions = {
}

export default { state, mutations, actions }
