import axios from "axios";
import {CharacterType, GetAllCharactersRequestType, GetAllCharactersResponseType} from "./types";

const charactersInstance = axios.create({
	baseURL: "https://rickandmortyapi.com/api/character",
})

export const charactersAPI = {
	getAllCharacters(options: GetAllCharactersRequestType = {page: 1, name: '', status: ''}) {
		const {page, name, status} = options
		return charactersInstance.get<GetAllCharactersResponseType>('/', {params: {page, name, status}})
	},
	getSingleCharacter(id: number) {
		return charactersInstance.get<CharacterType>(`/${id}`)
	},
}