const generatePin = () => {
    const random = Math.random() * 10000;
    const randomNumber = (random + '').split('.')[0];
    if (randomNumber.length === 4) {
        return randomNumber;
    }
    else {
        return generatePin();
    }
}


const clickPin = () => {
    const inputPin = document.getElementById('get-pin');
    inputPin.value = generatePin();
}


const buttonContainer = document.getElementById('get-digit');
buttonContainer.addEventListener('click', function (event) {
   const number = event.target.innerText;
   if(isNaN(number)){
       if(number == '<'){
          const inputPin = document.getElementById('input-pin');
          inputPin.value = inputPin.value.substring(0, inputPin.value.length - 1);
       }
       if(number == 'C'){
        const inputPin = document.getElementById('input-pin');
           inputPin.value = '';
       }

   }
   else{
       const inputPin = document.getElementById('input-pin');
       inputPin.value = inputPin.value + number;
   }
})


const showCorrect = document.getElementById('match-correct');
showCorrect.style.display = 'none';
const showError = document.getElementById('match-error');
showError.style.display = 'none';

const matchPin = () =>{
    const getInput = document.getElementById('get-pin').value;
    const inputPin = document.getElementById('input-pin').value;

    if(getInput === inputPin){
        showCorrect.style.display = 'block';
        showError.style.display = 'none';
    }
    else{
        showCorrect.style.display = 'none';
        showError.style.display = 'block';
    }

}

