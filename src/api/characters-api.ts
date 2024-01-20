import axios from "axios";

const charactersInstance = axios.create({
	baseURL: "https://rickandmortyapi.com/api/character",
})

export const charactersAPI = {
	getAllCharacters(page: number = 1, name: string = '', status: string = '') {
		return charactersInstance.get('/', {params: {page, name, status}})
	},
	getSingleCharacter(id: number) {
		return charactersInstance.get(`/${id}`)
	},
}