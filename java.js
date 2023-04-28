const form = document.querySelector('form');
form.addEventListener('submit', calcularIMC);

function calcularIMC(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura) {
    alert('Por favor, preencha os campos corretamente!');
    return;
  }

  const imc = peso / (altura ** 2);
  let resultado = '';

  if (imc < 17) {
    resultado = 'Muito abaixo do peso';
  } else if (imc < 18.5) {
    resultado = 'Abaixo do peso';
  } else if (imc < 25) {
    resultado = 'Peso ideal';
  } else if (imc < 30) {
    resultado = 'Sobrepeso';
  } else if (imc < 35) {
    resultado = 'Obesidade grau I';
  } else if (imc < 40) {
    resultado = 'Obesidade grau II (severa)';
  } else {
    resultado = 'Obesidade grau III (mórbida)';
  }

  const descExercicio = document.getElementById('descExercicio');
  descExercicio.innerHTML = `Resultado: ${resultado}`;
}