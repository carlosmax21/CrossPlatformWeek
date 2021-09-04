import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import React from 'react';

type selectedValue = 'cmkg' | 'ftlbs';

const InputControl: React.FC<{
    selectedValue: selectedValue;
    onSelectValue : (value: selectedValue) => void
}> = (props) =>{

    const inputChangeHandler = (event: CustomEvent) =>{
            props.onSelectValue(event.detail.value);
    }

    return(
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value='cmkg'>
                <IonLabel>cm/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='ftlbs'>
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControl;