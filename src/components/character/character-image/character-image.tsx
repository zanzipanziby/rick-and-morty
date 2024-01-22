import React from 'react';
import s from "./character-image.module.css"
type Props={
    imgUrl: string
}
export const CharacterImage = (props: Props) => {
    return (
        <div className={s.imgContainer} style={{backgroundImage: `url(${props.imgUrl})`}}>

        </div>
    );
};

