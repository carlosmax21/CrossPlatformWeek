import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/card.css';

import { homeOutline, search, heartOutline, pencilOutline } from 'ionicons/icons'

import explorePage from './pages/Explore';
import searchPage from './pages/Search';
import planPage from './pages/Plan';
import reviewPage from './pages/Review';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    
      <IonTabs>

        <IonRouterOutlet>
          <Route path = "/explore" component={explorePage} exact/>
          <Route path = "/search" component={searchPage} exact/>
          <Route path = "/plan" component={planPage} exact/>
          <Route path = "/review" component={reviewPage} exact/>
          <Route path="/" render={() => <Redirect to="/explore" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" mode="md">
          <IonTabButton tab="explore" href="/explore" >
            <IonIcon icon={homeOutline}></IonIcon>
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search" >
            <IonIcon icon={search}></IonIcon>
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="plan" href="/plan" >
            <IonIcon icon={heartOutline}></IonIcon>
            <IonLabel>Plan</IonLabel>
          </IonTabButton>
          <IonTabButton tab="review" href="/review" >
            <IonIcon icon={pencilOutline}></IonIcon>
            <IonLabel>Review</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    
    </IonReactRouter>
  </IonApp>
);

export default App;
