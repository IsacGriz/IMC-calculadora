function imc () {
  const form = document.querySelector('.form');
  let peso = form.querySelector('#peso');
  let altura = form.querySelector('#altura');
  const resultado = document.querySelector('#paragrafo');

  resultado.innerHTML = '';

  function imcCalculo (evento) {
    evento.preventDefault();  

    if (altura.value >= 10 && altura.value < 100) {
      altura.value /= 10;
    } else if (altura.value >= 100) {
      altura.value /= 100;
    }
    
    imc = ((peso.value).replace(',', '.') / ((altura.value).replace(',', '.') ** 2)).toFixed(2);

    if (imc > 0 && imc < 18.5) {
      resultado.innerHTML = `<p>O seu IMC é de ${imc} e você está abaixo do peso!</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.innerHTML = `<p>O seu IMC é de ${imc} e você está com o peso normal!</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerHTML = `<p>O seu IMC é de ${imc} e você está com sobrepeso!</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerHTML = `<p>O seu IMC é de ${imc} e você está com obesidade de grau 1!</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      resultado.innerHTML = `<p>O seu IMC é de ${imc} e você está com obesidade de grau 2!</p>`;
    } else if (imc >= 40) {
      resultado.innerHTML = `<p>O seu IMC é de ${imc} e você está com obesidade de grau 3!</p>`;
    } else {
      resultado.innerHTML = 'Você digitou caracteres inválidos! Verifique e tente novamente!';
    }
  }

  form.addEventListener('submit', imcCalculo)
}

imc();


