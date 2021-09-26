import { IonAlert, IonApp, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonPage, IonBackButton, IonButtons, IonToolbar, IonListHeader, IonRadio, IonRadioGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonSearchbar, IonButton } from "@ionic/react";


const App: React.FC = () => {
  
  return (
    <IonPage>
      <IonText className="ion-padding-start">
        <h1><b>Search</b></h1>
      </IonText>
      <IonSearchbar></IonSearchbar>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol >
              <IonCard className="card-review">
                <div className="ion-text-center">
                  <IonText text-wrap className="white-text ion-padding-top">
                    See what's good nearby.
                    <br></br>
                  </IonText>

                  <button className="btn-search">Turn on location settings</button>
                </div>
              </IonCard>
              <IonGrid>
              <IonRow>
            <IonText className="ion-padding-start">
              <h1>Destination travelers love</h1>
            </IonText>
          </IonRow>
          <IonRow>
            <IonCol>
              <img className="img-search" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.architecturaldigest.com%2Fphotos%2F5699802bc6772b7614567435%2Fmaster%2Fpass%2Fnew-york-city-guide.jpg&f=1&nofb=1"/>
              <div text-wrap className="card-title">New York City</div>
            </IonCol>
            <IonCol>
              <img className="img-search" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwonderfulengineering.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fsingapore-wallpaper-28.jpg&f=1&nofb=1"/>
              <div text-wrap className="card-title">Singapore</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img className="img-search" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-WcTM2B9eLAE%2FUUdcWwJcmNI%2FAAAAAAAAALU%2FasJ8sSoCZ2E%2Fs1600%2FColosseum_2007.jpg&f=1&nofb=1"/>
              <div text-wrap className="card-title">Rome</div>
            </IonCol>
            <IonCol>
              <img className="img-search" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FGKyG-p3qSCWFgl9d-YBF6sLRIrY%3D%2F5760x3840%2Ffilters%3Afill(auto%2C1)%2FGettyImages-559699279-58f4f3cb5f9b582c4dfb1b29.jpg&f=1&nofb=1"/>
              <div text-wrap className="card-title">Paris</div>
            </IonCol>
          </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>  
      </IonContent>
    </IonPage>
  )
}

export default App;
