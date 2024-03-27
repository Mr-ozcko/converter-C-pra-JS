function somar(){
    var num1 = document.getElementById("num1").valueAsNumber
    var num2 = document.getElementById("num2").valueAsNumber

    if(!num1 || !num2){
        alert("preencha todos os inputs")
        return;
    }
    console.log(num1+num2)

    document.getElementById("txtSoma").textContent = `O resultado da soma entre ${num1} e ${num2} é:  ${num1+num2}`
}

function area(){
    var num1 = document.getElementById("raio").valueAsNumber
    var pi = 3.1415

    if(!num1){
        alert("preencha todos os inputs")
        return;
    }

    document.getElementById("txtArea").textContent = `A area do circulo é ${(num1*num1*pi).toFixed(2)}`
}

function salario(){
    var num1 = document.getElementById("hr").valueAsNumber
    var num2 = document.getElementById("valorHr").valueAsNumber
    var num3 = 22

    if(!num1 || !num2){
        alert("preencha todos os inputs")
        return;
    }

    document.getElementById("txtSal").textContent = `O salario mensal é de $${(num1*num2*num3).toFixed(2)}`
}

function combustivel(){
    var num1 = document.getElementById("valor").valueAsNumber
    var num2 = document.getElementById("comb").valueAsNumber

    if(!num1 || !num2){
        alert("preencha todos os inputs")
        return;
    }

    document.getElementById("txtComb").textContent = `Voce irá abastecer ${(num1/num2).toFixed(2)} litros`
}

function parImpar(){
    var num = document.getElementById("num").valueAsNumber

    if(!num){
        alert("preencha todos os inputs")
        return;
    }

    if(num % 2 == 0){
        document.getElementById("PouI").textContent = `O numero ${num} é par`
    } else{
        document.getElementById("PouI").textContent = `O numero ${num} é impar`
    }
}