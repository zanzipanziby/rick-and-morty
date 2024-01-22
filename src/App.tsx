import React from 'react';
import './App.css';
import {charactersAPI} from "./api/characters-api/characters-api";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {getAllCharactersTC} from "./redux/reducers/characters-reducer/all-characters-reducer";
import {useAppSelector} from "./hooks/useAppSelector";
import {CharacterCard} from "./components/character/character-card/character-card";

function App() {
	const dispatch = useAppDispatch()
	const characters = useAppSelector(state => state.characters.results)

	const getAll = () => {
		dispatch(getAllCharactersTC({}))
	}
	const getRick = (id: number) => {
		charactersAPI.getSingleCharacter(id).then(res => console.log(res.data))
	}
	const charactersRender = () => {
		return characters.map(char => <CharacterCard character={char}/>)
	}


	return (
		<>
			<div className="App">
				<button onClick={getAll}>getAllChar</button>
				<button onClick={() => getRick(1)}>getRick</button>
			</div>
			{charactersRender()}
		</>

	);
}

export default App;
