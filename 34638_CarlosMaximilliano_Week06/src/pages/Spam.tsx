import { IonButton, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { listOutline } from "ionicons/icons";
import React from "react";

const Spam: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" fill="clear">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>Spam</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding-start ion-padding-top">
                <h2>Spam</h2>
            </IonContent>
        </IonPage>
    );
}

export default Spam;