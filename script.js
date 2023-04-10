let txtnum = document.querySelector('input#txtnum')
let buttomAdd = document.querySelector('input#buttom-add')
let buttomEnd = document.querySelector('input#button-end')
let selectList = document.querySelector('select#list')
let resultado = document.querySelector('div.resultado')
let numList = []

function adicionar(){
    resultado.innerHTML = '' //Limpa o resultado ao adicionar novo número
    if (verificar()){
        numList.push(Number(txtnum.value))

        let addNum = document.createElement('option') //Cria nova option no select
        addNum.text = `Valor ${txtnum.value} adicionado`
        selectList.appendChild(addNum)
    }
    
    //Limpa a caixa de números e foca nela após adição
    txtnum.value = ''
    txtnum.focus()
}

function limpar(){
    if (confirm("Tem certeza que deseja limpar a lista?")){
        selectList.options.length = 0 //Deleta as options do select
        numList = [] //Reseta o array
        resultado.innerHTML = ''
    }
}

function finalizar(){
    if (numList.length == 0){
        alert(`[ERRO] Lista vazia, insira números antes de finalizar`)
    }else{
        resultado.innerHTML = `
        <p>Ao todo, temos <strong>${numList.length}</strong> números carregado(s)</p>
        <p>O maior valor informado foi <strong>${getMaxOfArray(numList)}</strong></p>
        <p>O menor valor informado foi <strong>${getMinOfArray(numList)}</strong></p>
        <p>Somando todos os valores, temos <strong>${somarArray(numList)}</strong></p>
        <p>A média dos valores é <strong>${mediaArray().toFixed(2)}</strong></p>`
    }
}

//Retorna maior número do array
function getMaxOfArray(){
    return Math.max.apply(null, numList)
}

//Retorna menor número do array
function getMinOfArray(){
    return Math.min.apply(null,numList)
}

function somarArray(){
    let soma = 0
    for (let cont = 0; cont < numList.length; cont++){
        soma += numList[cont]
    }
    return soma
}

function mediaArray(){
    let media = 0
    media = somarArray()/numList.length
    return media
}

//Validações
function verificar(){
    let num = Number(txtnum.value)
    if (num < 1 || num > 100 || txtnum.length == 0){
        alert('[ERRO] Insira apenas valores entre 1 e 100')
        return false
    }
        if(numList.indexOf(num) != -1){
            alert('[ERRO] Número já inserido')
            return false
    }
    return true
}