import { IonAlert, IonApp, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonPage, IonBackButton, IonButtons, IonToolbar, IonListHeader, IonRadio, IonRadioGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonSegment, IonSegmentButton, IonButton, IonIcon, IonTextarea } from "@ionic/react";
import { heartCircle, map, document, personAdd } from "ionicons/icons";
import { useState } from "react";


const App: React.FC = () => {
  let [ segmentPart, setSegmentPart ] = useState<string>("trips");
  let [ text, setText ] = useState<string>("");
  const x = 5;
  const y = 5;
  
  return (
    <IonPage>
      <IonText className="ion-padding-start">
        <h1><b>Plan</b></h1>
      </IonText>
      <IonContent>
        <div className="plan-segment">
          <IonSegment mode="md" onIonChange={e => setSegmentPart(e.detail.value!)} color="dark">
            <IonSegmentButton value="trips">
              <IonLabel>Trips</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="saves">
              <IonLabel>Saves</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="bookings">
              <IonLabel>Bookings</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
        {segmentPart == "trips" && 
          <div className="ion-padding-start ion-padding-top ion-padding-end">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonIcon style={{ fontSize: "30px" }} icon={ heartCircle } color="primary"></IonIcon>
                  <IonLabel className="ion-padding-start">Save Places you'd like to visit</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonIcon style={{ fontSize: "30px" }} icon={ map } color="primary"></IonIcon>
                  <IonLabel className="ion-padding-start">See your saves on a map</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonIcon style={{ fontSize: "30px" }} icon={ document } color="primary"></IonIcon>
                  <IonLabel className="ion-padding-start">Keep track of notes, links, and more</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonIcon style={{ fontSize: "30px" }} icon={ personAdd } color="primary"></IonIcon>
                  <IonLabel className="ion-padding-start">Share and collaborate on your plans</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                Trip Name
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonItem style={{ width: "100%"}}>
                  <IonInput value={text} placeholder="Ex: Weekend in NYC" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                </IonItem>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonButton disabled={text !== '' ? false : true} shape="round" color="dark" style={{ width: "100%" }}>View my bookings</IonButton>
              </IonRow>
            </IonGrid>

          </div>
          }
        {segmentPart == "saves" && 
          <div className="ion-text-center ion-padding-top">
            <IonText className="saves-title">No saves yet</IonText>
            <br/>
            <IonText className="saves-subtitle">Places you save will appear here.</IonText>
          </div>
          }
        {segmentPart == "bookings" && 
          <div className="ion-text-center ion-padding-top">
            <IonButton shape="round" color="dark" style={{ width: "95%" }}>View my bookings</IonButton>
          </div>
          }
      </IonContent>
    </IonPage>
  )
}

export default App;
