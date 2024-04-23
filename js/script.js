const pi = 3.14

function calcularAreaCirculo () {
  let raio = document.getElementById("raioCirculo")
  let raioValue = raio.value
  let calculo = (raioValue * raioValue) * pi
  let resultado = document.getElementById("resultadoCirculo")
  return resultado.textContent = "O resultado é "+ calculo;
}

