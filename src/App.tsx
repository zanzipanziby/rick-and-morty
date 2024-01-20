import React from 'react';
import './App.css';
import {charactersAPI} from "./api/characters-api";

function App() {
	const getAll = () => charactersAPI.getAllCharacters().then(res => console.log(res.data))
	return (
		<div className="App">
			<button onClick={getAll}>getAllChar</button>
		</div>
	);
}

export default App;
