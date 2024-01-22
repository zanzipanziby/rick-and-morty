import React from 'react';
import {CharacterName} from "../character-name/character-name";
import {CharacterStatus} from "../character-status/character-status";
import s from "./character-info.module.css"
import {CharacterStatusType} from "../../../api/characters-api/types";

type Props={
    title: string;
    status: CharacterStatusType;
    species: string
}
 export const CharacterInfo = (props:Props) => {
    return (
        <div className={s.characterInfo}>
            <CharacterName title={props.title} className={s.characterName}/>
            <CharacterStatus status={props.status} species={props.species} className={s.characterStatus}/>
        </div>
    );
};

