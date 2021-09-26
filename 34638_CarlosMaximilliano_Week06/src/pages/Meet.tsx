import { IonApp, IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { ban, banSharp, listOutline, pencilOutline, trashOutline } from "ionicons/icons";
import React, { useRef } from "react";

export const FRIENDS_DATA = [
    { id: 'f1', name: 'John Thor', avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { id: 'f2', name: 'John Ness', avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { id: 'f3', name: 'John Doe', avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
];

const Meet: React.FC = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const callFriendHandler = () => {
        console.log("Calling...");
    }

    const blockFriendHandler = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Blocking...");
    }

    const deleteFriendHandler = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Deleting...");
    }

    const editFriendHandler = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Editing...");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" fill="clear">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>Meet</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {FRIENDS_DATA.map(friend => (
                    <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" onClick={blockFriendHandler}>
                                <IonIcon slot="icon-only" icon={ban} />
                            </IonItemOption>
                            <IonItemOption color="warning" onClick={deleteFriendHandler}>
                                <IonIcon slot="icon-only" icon={trashOutline} />
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItemOptions side="end">
                            <IonItemOption color="warning" onClick={editFriendHandler}>
                                <IonIcon slot="icon-only" icon={pencilOutline} />
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem key={friend.id}
                            lines="full"
                            button
                            onClick={callFriendHandler}>
                            <IonAvatar style={{marginRight: '15px'}}>
                                <img src={friend.avatar} />
                            </IonAvatar>
                            <IonLabel>{friend.name}</IonLabel>
                        </IonItem>
                    </IonItemSliding>
                ))}
            </IonContent>
        </IonPage>
    );
}

export default Meet;