import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import './BmiResult.css'

const BmiResult: React.FC<{bmi: number; hasil: string; resultColor: string;}> = (props) => {

    return(
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center" id="result" color={props.resultColor}>
                  <IonCardContent>
                    <h2>{props.bmi}</h2>
                    <h1>{props.hasil}</h1>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
    );
}

export default BmiResult;