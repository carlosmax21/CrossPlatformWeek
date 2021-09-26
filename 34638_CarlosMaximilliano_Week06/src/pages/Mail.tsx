import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

export const MAIL_DATA = [
    {id: 'm1', subject: 'Magang MBKM sudah dimulai'},
    {id: 'm2', subject: 'Bimbingan skripsi'},
    {id: 'm3', subject: 'Progress laporan'}
];

const Mail: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" fill="clear">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>IonicMail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {MAIL_DATA.map(mail => (
                    <IonCard key={mail.id}>
                        <IonCardContent className="ion-text-center">
                            <h2>{mail.subject}</h2>
                            <IonButton routerLink={`/mail/${mail.id}`}> 
                                View Mail
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
}

export default Mail;