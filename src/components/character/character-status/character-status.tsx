import {CharacterStatusType} from "../../../local-data/character"
import s from "./character-status.module.css"

type Props = {
    status: CharacterStatusType
    species: string
    className?: string

}
export const CharacterStatus = (props: Props) => {
    let circleClassName;

    switch (props.status) {
        case "Alive":
            circleClassName = s.circleAlive;
            break;
        case "Dead":
            circleClassName = `${s.circleAlive} ${s.circleDead}`;
            break;
        case "unknown":
            circleClassName = `${s.circleAlive} ${s.circleUnknown}`;
            break;
        default:
            break;
    }
    const status= props.status.charAt(0).toUpperCase() + props.status.slice(1);
    return <div className={`${props.className ? props.className: ""} ${s.characterStatus}`}>
        <div className={circleClassName}></div>
        <div>{status}-{props.species}</div>
    </div>
}