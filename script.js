//dividir a area total pelo tamanho do piso
//multiplicar o resultado por 10% de quebra
// adicionar o valor do quebra com o primeiro resultado

let inputAmbiente = document.getElementById('metragemA')
let inputPiso = document.getElementById('metragemP')

let resultado = document.getElementById('resultado')

function calcular(){

    
    let metragemA = inputAmbiente.value
    let metragemP = inputPiso.value

    
    let calculo1 = metragemA / metragemP
    let calculo2 = calculo1 * 0.1
    let resultadoCalc = Math.ceil (calculo1 + calculo2)

    console.log(resultadoCalc)


    resultado.innerHTML = `<p>Você irá precisar de ${resultadoCalc} peças de piso já contando 10% de quebra</P>`
}






