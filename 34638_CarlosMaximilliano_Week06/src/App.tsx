import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { settingsOutline, listOutline, mailOutline, videocamOutline, warningOutline } from 'ionicons/icons';

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
import MailDetail from './pages/MailDetail';
import Meet from './pages/Meet';
import MailTabs from './pages/MailTabs';
import Mail from './pages/Mail';
import Spam from './pages/Spam';
import Setting from './pages/Setting';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>IonMail</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/tabs/mail">
                  <IonIcon slot="start" icon={listOutline} />
                  <IonLabel>All Mail</IonLabel>
                </IonItem>
                <IonItem button routerLink="/tabs/spam">
                  <IonIcon slot="start" icon={warningOutline} />
                  <IonLabel>Spam</IonLabel>
                </IonItem>
                <IonItem button routerLink="/setting">
                  <IonIcon slot="start" icon={settingsOutline} />
                  <IonLabel>Setting</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
      </IonMenu>
        <IonRouterOutlet id="main">
          <Route path="/tabs" component={MailTabs} />
          <Route path="/setting" component={Setting} />
          <Route path="/mail/:mailId" component={MailDetail} />
          <Redirect exact from="/" to="/tabs" />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
