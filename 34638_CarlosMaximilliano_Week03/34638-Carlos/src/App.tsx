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
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const App: React.FC = () => {
  const [ calculatedBMI, setCalculatedBMI ]  = useState<number>();
  const [ BMIresult, setBMIresult ] = useState<string>();
  const [ error, setError ] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [ calcUnits, setCalcUnits ] = useState<'cmkg' | 'ftlbs'>('cmkg');

  const calculateBMI = () =>{
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if(!enteredHeight || !enteredWeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Please enter a valid (non-negative) input number');
      return;
    }

    if(!enteredHeight || !enteredWeight) return;

    const bmi = +enteredWeight / ((+enteredHeight/100) * (+enteredHeight/100))

    setCalculatedBMI(bmi)

    if (bmi >= 30)
        setBMIresult('Obesitas')
    else if (bmi >= 25)
        setBMIresult('Gemuk')
    else if (bmi >= 8.5)
        setBMIresult('Normal')
    else
        setBMIresult('Kurus')
  }

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  }

  const clearError = () => {
    setError('');
  }

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
}

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {text: 'Okay', handler: clearError}
        ]}
      />
      
      <IonApp>
        <IonHeader>
          <IonTitle>BMI Calculator</IonTitle>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                  <IonInput ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                  <IonInput ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs}/>
            {calculatedBMI && <IonRow>
              <IonCol>
                <IonCard className="ion-text-center">
                  <IonCardContent>
                    <h2>{calculatedBMI}</h2>
                    <h1>{BMIresult}</h1>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  )
}

export default App;
