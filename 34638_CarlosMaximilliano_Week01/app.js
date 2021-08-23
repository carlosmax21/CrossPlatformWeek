const calculateBtn = document.querySelector('ion-button');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const bmiCard = document.getElementById('bmi-card')
const bmiNumber = document.getElementById('bmi-number');
const result = document.getElementById('result')

const calculateBMI = () => {
    let bmiResult
    bmiCard.style.display = 'block'

    if (heightInput.value === '' || weightInput.value === '') {
        bmiNumber.innerHTML = ''
        result.innerHTML = 'Mohon memasukan angka terlebih dahulu'
        return
    }

    if (heightInput.value < 0 || weightInput.value < 0) {
        bmiNumber.innerHTML = ''
        result.innerHTML = 'Mohon memasukan angka positif'
        return
    }

    const enteredHeight = heightInput.value / 100;
    const enteredWeight = weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);
    

    if (bmi >= 30)
        bmiResult = 'Obesitas'
    else if (bmi >= 25)
        bmiResult = 'Gemuk'
    else if (bmi >= 8.5)
        bmiResult = 'Normal'
    else
        bmiResult = 'Kurus'

    result.innerHTML = bmiResult
    bmiNumber.innerHTML = bmi

    console.log(bmi);
}

const resetBMI = () => {
    heightInput.value = '';
    weightInput.value = '';

    bmiCard.style.display = 'none'
}


calculateBtn.addEventListener('click', calculateBMI)
resetBtn.addEventListener('click', resetBMI)
