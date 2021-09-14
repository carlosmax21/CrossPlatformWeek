import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              Calculator
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2 className = "ion-text-center" >34638 - CarlosMaximilliano</h2>
        <IonButton expand="block" routerLink = "/bmi" >Bmi Calculator</IonButton>
        <IonButton expand="block" routerLink = "/bmr" >Bmr Calculator</IonButton>
      </IonContent>
    </IonPage>
  )
};


export default Home;
