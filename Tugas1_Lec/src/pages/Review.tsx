import { IonAlert, IonApp, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonPage, IonBackButton, IonButtons, IonToolbar, IonListHeader, IonRadio, IonRadioGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from "@ionic/react";
import CardImage from "../components/CardImage";


const App: React.FC = () => {
  
  return (
    <IonPage>
      <IonText className="ion-padding-start">
        <h1><b>Review</b></h1>
      </IonText>
      <IonContent>
        <IonGrid>
            <IonRow>
              <IonCol>
               <CardImage image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsteamed-dumpling-chinese-style-food-21589116.jpg&f=1&nofb=1"} button={"Write a Review"}></CardImage>
               <CardImage image={"https://www.absolutvision.com/public/uploads/preview/polaroid-1276998-721537785305u6lrd1asu4.jpg"} button={"Upload a Photo"}></CardImage>
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default App;
