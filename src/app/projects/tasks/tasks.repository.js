// import http from "@/axiosConfig/base-axios-config";

export default class TasksRepository {
	async getUploadedFiles(id) {
		// const response = await http.get(`/tasks?id={id}`)
		// return response.data.uploadedFiles
		const files = JSON.parse(localStorage.getItem('uploadedFiles'));
		return files || [];  
	}
	async getIssues(id) {
		// const response = await http.get(`/tasks?id={id}`)
		// return response.data.issues
		return [{
			title: "As a user, I want to be able to create new versions for projects and",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius in quas quisquam sequi, temporibus tenetur! Iusto natus ratione sequi."
		}, {
			title: "As user, I want to be able to drag and drop files",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius in quas quisquam sequi, temporibus tenetur! Iusto natus ratione sequi."
		}]
	}
	async addFile(newFile) {
		// const response = await http.get(`/tasks?id={id}`)
		// return response.data.issues
		let files = JSON.parse(localStorage.getItem('uploadedFiles'))

		if (!files) {
			files = [newFile]
		} else {
			files = [...files, newFile]
		}
		localStorage.setItem('uploadedFiles', JSON.stringify(files))
	}

	// async updateMembers(newMember) {
	// 	let members = JSON.parse(localStorage.getItem('members'))

	// 	if (!members) {
	// 		members = [newMember]
	// 	} else {
	// 		members = [...files, newMember]
	// 	}
	// 	debugger;
	// 	localStorage.setItem('members', JSON.stringify(members))
	// }
	async updateSelectedMembers(members) {
		let selectedMembers = JSON.parse(localStorage.getItem('selectedMembers'));

		selectedMembers = [...members];
		localStorage.setItem('selectedMembers', JSON.stringify(selectedMembers));
		return selectedMembers;
	}
	async getMembers(id) {
		// const response = await http.get(`/tasks?id={id}`)
		// return response.data.members
		const members = JSON.parse(localStorage.getItem('members'));
		return members || [];  
	}
}
