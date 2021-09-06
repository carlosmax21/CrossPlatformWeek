import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";
import React from "react";

const BmiResult: React.FC<{bmi: number; hasil: string}> = (props) => {
    
    return(
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center">
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