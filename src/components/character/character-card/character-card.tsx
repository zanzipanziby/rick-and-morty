import {CharacterInfo} from "../character-info/character-info";
import {CharacterImage} from "../character-image/character-image";
import {CharacterType} from "../../../api/characters-api/types";
import s from "./character-card.module.css"

type Props = {
	character: CharacterType
}

export const CharacterCard = (props: Props) => {
	return <div className={s.characterCard}>
		<CharacterImage imgUrl={props.character.image}/>
		<CharacterInfo title={props.character.name} species={props.character.species} status={props.character.status}/>
	</div>
}