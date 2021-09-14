import { IonAlert, IonApp, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonPage, IonBackButton, IonButtons, IonToolbar, IonListHeader, IonRadio, IonRadioGroup } from "@ionic/react";
import { useState, useRef } from "react";
import BmrControls from "../components/BmrControls";
import BmrResult from "../components/BmrResult";
import InputControl from "../components/InputControl";

const App: React.FC = () => {
  const [ calculatedBMR, setCalculatedBMR ]  = useState<number>();
  const [ gender, setGender ] = useState<string>();
  const [ error, setError ] = useState<string>();
  const ageInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [ calcUnits, setCalcUnits ] = useState<'cmkg' | 'ftlbs'>('cmkg');

  const calculateBMR = () =>{
    let enteredAge = ageInputRef.current!.value;
    let enteredWeight = weightInputRef.current!.value;
    let enteredHeight = heightInputRef.current!.value;
    let enteredGender = gender;
    let genderInput = 0;
    let weightCalc = 0;
    let heightCalc = 0;
    let ageCalc = 0;

    if(!enteredHeight || !enteredWeight || !enteredAge || +enteredHeight <= 0 || +enteredWeight <= 0 || +enteredAge <= 0) {
      setError('Please enter a valid (non-negative) input number');
      return;
    }

    if(!enteredGender){
      setError('Please select a gender');
      return;
    }

    if(calcUnits !== 'cmkg'){
      enteredHeight = +enteredHeight * 30.48;
      enteredWeight = +enteredWeight / 2.2; 
    }

    if(enteredGender === 'Male'){
      genderInput = 66
      weightCalc = +enteredWeight * 13.7
      heightCalc = +enteredHeight * 5
      ageCalc = +enteredAge * 6.8
    }
    else if (enteredGender === 'Female'){
      genderInput = 65
      weightCalc = +enteredWeight * 9.6
      heightCalc = +enteredHeight * 1.8
      ageCalc = +enteredAge * 4.7
    }

    const bmr = +genderInput + weightCalc + heightCalc - ageCalc

    setCalculatedBMR(bmr)
    
  }

  const resetInputs = () => {
    setGender('');
    ageInputRef.current!.value = '';
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
            <IonTitle>BMR Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}/>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                        <IonLabel position="floating">Age</IonLabel>
                        <IonInput ref={ageInputRef}></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRadioGroup value={gender} onIonChange={e => setGender(e.detail.value)}>
                  <IonRow>              
                    <IonListHeader>
                        <IonLabel>Gender</IonLabel>
                    </IonListHeader>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                          <IonLabel>Male</IonLabel>
                          <IonRadio slot="start" value="Male" />
                      </IonItem>
                    </IonCol>
                    <IonCol>
                      <IonItem>
                          <IonLabel>Female</IonLabel>
                          <IonRadio slot="start" value="Female" />
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  </IonRadioGroup>
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
                  <BmrControls onCalculate={calculateBMR} onReset={resetInputs}/>
                  {calculatedBMR &&
                  <BmrResult bmr={calculatedBMR} />}
                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default App;
