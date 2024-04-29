const pi = 3.14

function calcularAreaCirculo () {
  let raio = document.getElementById("raioCirculo")
  let raioValue = raio.value
  let calculo = (raioValue * raioValue) * pi
  let resultado = document.getElementById("resultadoCirculo")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaCubo () {
  let compAresta = document.getElementById("volumeCubo")
  let compArestaValue = compAresta.value
  let calculo = (compArestaValue * compArestaValue * compArestaValue)
  let resultado = document.getElementById("resultadoCubo")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaRetangulo () {
  let baseRet = document.getElementById("baseRetangulo")
  let baseRetValue = baseRet.value
  let alturaRet = document.getElementById("alturaRetangulo")
  let alturaRetValue = alturaRet.value
  let calculo = (baseRetValue * alturaRetValue)
  let resultado = document.getElementById("resultadoRetangulo")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaRomboedro () {
  let dMaior = document.getElementById("romboedroMaior")
  let dMaiorValue = dMaior.value
  let dMenor = document.getElementById("romboedroMenor")
  let dMenorValue = dMenor.value
  let alturaR = document.getElementById("romboedroAltura")
  let alturaRValue = alturaR.value
  let calculo = ((dMaiorValue * dMenorValue) / 2) * alturaRValue
  let resultado = document.getElementById("resultadoRomboedro")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaTrapezoide() {
  let bMenor = document.getElementById("baseMenor")
  let bMenorValue = parseFloat(bMenor.value)
  let bMaior = document.getElementById("baseMaior")
  let bMaiorValue = parseFloat(bMaior.value)
  let alturaT = document.getElementById("trapezoideAltura")
  let alturaTValue = parseFloat(alturaT.value)
  let calculo = ((bMaiorValue + bMenorValue) * alturaTValue) / 2
  let resultado = document.getElementById("resultadoTrapezoide")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaHeptagono() {
  let hBase = document.getElementById("heptagonoBase")
  let hBaseValue = parseFloat(hBase.value)
  let alturaH = document.getElementById("heptagonoAltura")
  let alturaHValue = parseFloat(alturaH.value)
  let calculo = ((hBaseValue * alturaHValue) / 2) * 7
  let resultado = document.getElementById("resultadoHeptagono")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaPentagono() {
  let pBase = document.getElementById("pentagonoBase")
  let pBaseValue = parseFloat(pBase.value)
  let alturaP = document.getElementById("pentagonoAltura")
  let alturaPValue = parseFloat(alturaP.value)
  let calculo = ((pBaseValue * alturaPValue) / 2) * 5
  let resultado = document.getElementById("resultadoPentagono")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaHexagono() {
  let hBase = document.getElementById("hexagonoBase")
  let hBaseValue = parseFloat(hBase.value)
  let alturaH = document.getElementById("hexagonoAltura")
  let alturaHValue = parseFloat(alturaH.value)
  let calculo = ((hBaseValue * alturaHValue) / 2) * 6
  let resultado = document.getElementById("resultadoHexagono")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaQuadrado() {
  let ladoQua = document.getElementById("quadradoLado")
  let ladoQuaValue = parseFloat(ladoQua.value)
  let calculo = (ladoQuaValue * ladoQuaValue)
  let resultado = document.getElementById("resultadoQuadrado")
  return resultado.textContent = 'O resultado é ' + calculo;
}

function calcularAreaCuboide() {
  let comprimento = document.getElementById("comprimentoCuboide")
  let comprimentoValue = parseFloat(comprimento.value)
  let largura = document.getElementById("larguraCuboide")
  let larguraValue = parseFloat(largura.value)
  let altura = document.getElementById("alturaCuboide")
  let alturaValue = parseFloat(altura.value)

  let calculo = 2 * (comprimentoValue * larguraValue + comprimentoValue * alturaValue + larguraValue * alturaValue)
  let resultado = document.getElementById("resultadoCuboide")
  return resultado.textContent = 'O resultado é ' + calculo;
}