const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao1");
const botao = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

botao.addEventListener("click",calcular);

function calcular(){
    if(campo1.value==="" || campo2.value===""){
        resposta.classList.add("problema");
        resposta.innerHTML="Campo Vazio";
        setTimeout(()=>{
            resposta.classList.remove("problema");
            resposta.innerHTML="";

        },3000);
    }
    else{
        const valor1 = parseInt(campo1.value);
        const valor2 = Number(campo2.value);
        const operacao = seletor.value;
        if(operacao==="somar")
            resposta.innerHTML = valor1 + valor2;
        if(operacao==="subtrair")
            resposta.innerHTML = valor1 - valor2;
        if(operacao==="multiplicar")
            resposta.innerHTML = valor1 * valor2;
        if(operacao==="dividir")
            resposta.innerHTML = valor1 / valor2;
    }
}

const campo3 = document.querySelector("#campo3");
const campo4 = document.querySelector("#campo4");
const seletor2 = document.querySelector("#operacao2");

seletor2.addEventListener("change",calcular2);
campo3.addEventListener("keyup",calcular2);
campo4.addEventListener("keyup",calcular2);

function calcular2(){
    if(campo3.value!="" && campo4.value!=""){
        const valor1 = parseInt(campo3.value);
        const valor2 = Number(campo4.value);
        const operacao = seletor2.value;
        if(operacao==="somar")
            resposta.innerHTML = valor1 + valor2;
        if(operacao==="subtrair")
            resposta.innerHTML = valor1 - valor2;
        if(operacao==="multiplicar")
            resposta.innerHTML = valor1 * valor2;
        if(operacao==="dividir")
            resposta.innerHTML = valor1 / valor2;
    }
}