import { IonRow, IonCol, IonCard, IonCardContent, IonButton } from "@ionic/react";
import React from "react";


const ImageWithText: React.FC<{image: string; button: string;}> = (props) => {

    return(
        <div className="ion-text-center">
            <img className="img-search" src={props.image}/>
            <div text-wrap className="card-title">{props.button}</div>
        </div>
    );
}

export default ImageWithText;