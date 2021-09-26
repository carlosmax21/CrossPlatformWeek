import { IonRow, IonCol, IonCard, IonCardContent, IonButton } from "@ionic/react";
import React from "react";


const CardReview: React.FC<{image: string; button: string;}> = (props) => {

    return(
      <IonCard className="card-bg card-size ion-padding-bottom">
        <div className="ion-text-center">
          <img className="card-img" src={props.image}/>
          <IonButton shape="round" color="dark" className="img-btn">{props.button}</IonButton>
        </div>
      </IonCard>
    );
}

export default CardReview;