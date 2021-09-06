import { IonRow, IonCol, IonCard, IonCardContent, IonGrid } from "@ionic/react";
import React from "react";

const BmrResult: React.FC<{bmr: number}> = (props) => {
    return(
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center">
                  <IonCardContent>
                    <h1>BMR = {props.bmr} Calories/day</h1>
                    <h2>Daily calorie needs based on activity level</h2>
                    <IonGrid>
                      <IonRow>
                        <IonCol className="ion-align-self-start"><b>Activity Level</b></IonCol>
                        <IonCol className="ion-align-self-end"><b>Calorie</b></IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol className="ion-align-self-start">Sedentary: little or no exercise</IonCol>
                        <IonCol className="ion-align-self-end">{+props.bmr * 1.2}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol className="ion-align-self-start">Exercise 1-3 times/week</IonCol>
                        <IonCol className="ion-align-self-end">{+props.bmr * 1.375}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol className="ion-align-self-start">Exercise 4-5 times/week</IonCol>
                        <IonCol className="ion-align-self-end">{+props.bmr * 1.55}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol className="ion-align-self-start">Daily exercise or intense exercise 3-4 times/week</IonCol>
                        <IonCol className="ion-align-self-end">{+props.bmr * 1.725}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol className="ion-align-self-start">Exercise 6-7 times/week</IonCol>
                        <IonCol className="ion-align-self-end">{+props.bmr * 1.9}</IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
    );
}

export default BmrResult;