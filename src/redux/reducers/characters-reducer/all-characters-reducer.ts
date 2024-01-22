import {GetAllCharactersRequestType, GetAllCharactersResponseType} from "../../../api/characters-api/types";
import {Dispatch} from "@reduxjs/toolkit";
import {charactersAPI} from "../../../api/characters-api/characters-api";
import {AxiosError} from "axios";


const initialState: GetAllCharactersResponseType = {
	info: null,
	results: []
}

export const allCharactersReducer = (state: GetAllCharactersResponseType = initialState, action: ActionType): GetAllCharactersResponseType => {
	switch (action.type) {
		case("GET_CHARACTERS"):
			return action.payload.characters
		default:
			return state
	}
}


type ActionType = GetAllCharactersActionType

// actions
type GetAllCharactersActionType = ReturnType<typeof getAllCharactersAC>
const getAllCharactersAC = (characters: GetAllCharactersResponseType) => {
	return {
		type: "GET_CHARACTERS",
		payload: {
			characters
		}
	} as const
}


//thunk
export const getAllCharactersTC = (option: GetAllCharactersRequestType) => async (dispatch: Dispatch) => {
	try {
		const res = await charactersAPI.getAllCharacters(option)
		dispatch(getAllCharactersAC(res.data))
	} catch (e) {
		const err = e as AxiosError;
		console.error(err.response?.data);
	}

}






