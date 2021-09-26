import { IonAlert, IonApp, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonPage, IonBackButton, IonButtons, IonToolbar, IonListHeader, IonRadio, IonRadioGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonButton, IonImg, IonAvatar, IonSlides, IonSlide, IonIcon } from "@ionic/react";
import { bed, chatbox, heartOutline, restaurant, ticket } from "ionicons/icons";

const App: React.FC = () => {
  const slideOpts = {
    slidesPerView: 2.1,
    initialSlide: 0
  };
  
  return (
    <IonPage>
      <IonContent>
      <IonGrid style={{width:"100%", height:"100%"}}>
        <div className="explore-background">
          <IonRow>
            <IonCol>
              <IonText className="ion-padding-start">
                <h1><b>Explore</b></h1>
              </IonText>
            </IonCol>
            <IonCol>
              <IonAvatar style={{ width:"30px", height:"30px" }}>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonSlides options={slideOpts}>
              <IonSlide className="ion-padding-end">
                <IonButton size="small" style={{width:"180px", fontSize:"0.6em"}} shape="round" color="dark">
                <IonIcon style={{ fontSize: "15px" }} icon={ bed }></IonIcon>
                Hotels
                </IonButton>
              </IonSlide>
              <IonSlide className="ion-padding-end">
                <IonButton size="small" style={{width:"180px", fontSize:"0.6em"}} shape="round" color="dark">
                <IonIcon style={{ fontSize: "15px" }} icon={ ticket }></IonIcon>
                Things to do
                </IonButton>
              </IonSlide>
              <IonSlide className="ion-padding-end">
                <IonButton size="small" style={{width:"180px", fontSize:"0.6em"}} shape="round" color="dark">
                <IonIcon style={{ fontSize: "15px" }} icon={ restaurant }></IonIcon>
                Restaurant
                </IonButton>
              </IonSlide>
              <IonSlide className="ion-padding-end">
                <IonButton size="small" style={{width:"180px", fontSize:"0.6em"}} shape="round" color="dark">
                <IonIcon style={{ fontSize: "15px" }} icon={ chatbox }></IonIcon>
                Forum
                </IonButton>
              </IonSlide>
            </IonSlides>
          </IonRow>
          <IonRow>
              <img className="img-search" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fbeach%2Fbeach_PNG42.png&f=1&nofb=1"/>
          </IonRow>
        </div>
        <IonRow className="ion-padding-top">
          <IonCard className="card-review ion-padding">
            <div className="ion-text-center">
              <IonText text-wrap className="white-text ion-padding-top" style={{ fontSize:"27px"}}>
                Discover more in Paris
                <br></br>
              </IonText>
            <IonButton shape="round" color="dark">Keep exploring</IonButton>
            </div>
          </IonCard>
        </IonRow>
        <IonRow>
          <IonCol>
            <img style={{ height:"300px"}} className="img-search" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fgerman-mountains-2.jpg&f=1&nofb=1"/>
            <div text-wrap className="explore-card-title">Goodbye to curshing heat and crushing crowds</div>
            <div text-wrap className="explore-card-subtitle">why fall is the best time to visit our national parks</div>
            <IonButton size="small" style={{width:"auto", fontSize:"0.8em"}} className="explore-button" shape="round" color="dark">Get the intel</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <h4 className="ion-padding-start"><b>Small batch stays</b></h4>
          <h6 className="ion-padding-start">Cool cities, cooler botique hotels</h6>
          <IonSlides options={slideOpts}>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/7174394/pexels-photo-7174394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Rome</div>
            </IonSlide>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/7005295/pexels-photo-7005295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Austin</div>
            </IonSlide>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/7147289/pexels-photo-7147289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">New York City</div>
            </IonSlide>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/6585627/pexels-photo-6585627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Washington DC</div>
            </IonSlide>
          </IonSlides>
        </IonRow>
        <IonRow>
          <h4 className="ion-padding-start"><b>Plan your next escape</b></h4>
          <h6 className="ion-padding-start">Family-friendly spots to explore</h6>
          <IonSlides options={slideOpts}>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Poland</div>
            </IonSlide>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Canada</div>
            </IonSlide>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/9560057/pexels-photo-9560057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Gatlinburg</div>
            </IonSlide>
            <IonSlide className="ion-padding-end">
              <img style={{height:"100px"}} className="img-search" src="https://images.pexels.com/photos/5092848/pexels-photo-5092848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <div text-wrap className="explore-image-title">Sedona</div>
            </IonSlide>
          </IonSlides>
        </IonRow>
        <IonRow>
          <IonCol>
            <img style={{ height:"300px"}} className="img-search" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <div text-wrap className="explore-card-title-short">Explore Las Vegas, fork first</div>
            <div text-wrap className="explore-card-subtitle-short">our guide to the top celebrity chef restaurant in Vegas</div>
            <IonButton size="small" style={{width:"auto", fontSize:"0.6em"}} className="explore-button" shape="round" color="dark">Check them out</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <img style={{ height:"300px"}} className="img-search" src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <div text-wrap className="explore-card-title-short">Pack that weekender bag</div>
            <div text-wrap className="explore-card-subtitle-short">our guide to last-minute road trips you can do right now</div>
            <IonButton size="small" style={{width:"auto", fontSize:"0.6em"}} className="explore-button" shape="round" color="dark">Check them out</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <img style={{ height:"300px"}} className="img-search" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F207%2F534%2Foriginal%2Fvector-road-trip-background-illustration.jpg&f=1&nofb=1"/>
            <div text-wrap className="explore-card-title-short">From dream trips to Michelin meals</div>
            <div text-wrap className="explore-card-subtitle-short">All the ways we're celebrating Hispanic Heritage Months</div>
            <IonButton size="small" style={{width:"auto", fontSize:"0.6em"}} className="explore-button" shape="round" color="dark">Check them out</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default App;
