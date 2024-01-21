import {GetAllCharactersResponseType} from "../../../api/characters-api/types";


const initialState: GetAllCharactersResponseType = {
	info: null,
	results: []
}

export const allCharactersReducer = (state: GetAllCharactersResponseType = initialState, action: { type: string }) => {
	switch (action.type) {
		default:
			return state
	}
}


