import { IonAlert, IonApp, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonPage, IonBackButton, IonButtons, IonToolbar } from "@ionic/react";
import { useState, useRef } from "react";
import BmiControls from "../components/BmiControls";
import BmiResult from "../components/BmiResult";
import InputControl from "../components/InputControl";

const App: React.FC = () => {
  const [ calculatedBMI, setCalculatedBMI ]  = useState<number>();
  const [ BMIresult, setBMIresult ] = useState<string>();
  const [ error, setError ] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [ calcUnits, setCalcUnits ] = useState<'cmkg' | 'ftlbs'>('cmkg');

  const calculateBMI = () =>{
    let enteredWeight = weightInputRef.current!.value;
    let enteredHeight = heightInputRef.current!.value;

    if(!enteredHeight || !enteredWeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Please enter a valid (non-negative) input number');
      return;
    }

    if(!enteredHeight || !enteredWeight) return;

    if(calcUnits !== 'cmkg'){
      enteredHeight = +enteredHeight * 30.48;
      enteredWeight = +enteredWeight / 2.2; 
    }

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
      
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
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
            {calculatedBMI && BMIresult &&
            <BmiResult bmi={calculatedBMI} hasil={BMIresult} />}
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default App;
