import { Redirect, Route } from 'react-router-dom';
import { IonAlert, IonApp, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterOutlet, IonRow, IonTitle } from '@ionic/react';
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

import BmiControls from './components/BmiControls';
import InputControl from './components/InputControl'

import { useRef, useState } from 'react';
import BmiResult from './components/BmiResult';
import BmiCalc from './pages/BmiCalc';
import BmrCalc from './pages/BmrCalc';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to = "/home" />
        <Route path="/bmi" component = {BmiCalc} />
        <Route path="/bmr" component = {BmrCalc} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App;