// import http from "@/axiosConfig/base-axios-config"

export default class TasksRepository {
  async getTaskById(taskId) {
    console.log(taskId)
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if (!tasks) {
      tasks = []
      localStorage.setItem('tasks', '[]')
    }
    let task = tasks.find((item) => item.id === taskId)
    if (task) {
      console.log('find')
      console.log(task)
      return task
    }
    task = {
      id: taskId,
      title: 'Default title',
      description: '<h1>Default description</h1>',
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return task
  }

  async updateTask(task) {
    console.log('updateTask')
    console.log(task)
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    const index = tasks.findIndex((item) => item.id === task.id)
    tasks[index] = task
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return task
  }

  async getUploadedFiles(id) {
    // const response = await http.get(`/tasks?id={id}`)
    // return response.data.uploadedFiles
    const files = JSON.parse(localStorage.getItem('files'))
    return files || []
  }

  async getIssues(id) {
    // const response = await http.get(`/tasks?id={id}`)
    // return response.data.issues
    return [
      {
        title:
          'As a user, I want to be able to create new versions for projects and',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius in quas quisquam sequi, temporibus tenetur! Iusto natus ratione sequi.',
      },
      {
        title: 'As user, I want to be able to drag and drop files',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius in quas quisquam sequi, temporibus tenetur! Iusto natus ratione sequi.',
      },
    ]
  }

  async uploadFiles(files) {
    // const response = await http.post(`/tasks?id={id}`, { data: { files } })
    // return response.data.files
    localStorage.setItem('files', JSON.stringify(files))
  }

  async updateSelectedMembers(members, id) {
    // const response = await http.post(`/tasks?id={id}`, { data: { members } })
    // return response.data.selectedMembers
    localStorage.setItem('selectedMembers', JSON.stringify(members))
    return members
  }

  async getSelectedMembers(id) {
    // const response = await http.get(`/tasks?id={id}`)
    // return response.data.selectedMembers

    const selectedMembers = localStorage.getItem('selectedMembers')
    return selectedMembers ? JSON.parse(selectedMembers) : []
  }

  async getMembers(id) {
    // const response = await http.get(`/tasks?id={id}`)
    // return response.data.members
    const members = JSON.parse(localStorage.getItem('members'))
    if (members) {
      return members
    }
    const defaultMembers = [
      {
        id: 1,
        name: 'Lana',
        speciality: 'Designer',
      },
      {
        id: 2,
        name: 'Anastasiya',
        speciality: 'Front-end',
      },
      {
        id: 3,
        name: 'Mary-Anna',
        speciality: 'Back-end',
      },
      {
        id: 4,
        name: 'Stanislav',
        speciality: 'Front-end',
      },
      {
        id: 5,
        name: 'Alex',
        speciality: 'Front-end',
      },
      {
        id: 6,
        name: 'Bogdan',
        speciality: 'Back-end',
      },
    ]
    localStorage.setItem('members', JSON.stringify(defaultMembers))
    return defaultMembers
  }

  async removeFile(taskId, fileId) {
    // const response = await http.delete(`/tasks?id={taskId}&file-id={fileId}`)
    // return response.data.removedFile
    const files = JSON.parse(localStorage.getItem('files'))
    const filteredFiles = files.filter((file) => file.id !== fileId)
    localStorage.setItem('files', JSON.stringify(filteredFiles))

    return filteredFiles
  }
}
