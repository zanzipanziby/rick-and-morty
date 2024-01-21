import {combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {allCharactersReducer} from "../reducers/characters-reducer/all-characters-reducer";

const rootReducer = combineReducers({
	characters: allCharactersReducer
})

const store = legacy_createStore(rootReducer)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch