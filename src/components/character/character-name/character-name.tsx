import React from 'react';
import s from "./character-name.module.css"

type Props = {
    title: string
    className?: string
}
export const CharacterName = (props: Props) => {
    return (
        <h3 className={`${props.className ? props.className : ""} ${s.title}`}>{props.title}</h3>
    );
};

