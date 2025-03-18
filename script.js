let pessoa = {  nome:"Gediel",
                idade: 30,
};
let listaDesejos = ["Carro",5,"Apartamento",pessoa,"Video Game"]
/* Evita-se o uso do var */
    let idade;
    let nome = "Fernanda";
/* const é usado para variavel que não vai ser alterada */  
    const teste = "teste";
    let mensagem;

    idade=16;

    idade = idade + 1;
    nome = "Gedial";

    if(idade >= 18){
        mensagem = `Ola ${nome} sua idade é ${idade} 1.`;
    }
    else{
        mensagem = "Ola " + nome + " " + idade + ".";
    };

    console.log(mensagem);
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa["nome"]);
    console.log(listaDesejos);
    console.log(listaDesejos[2]);

    let paragrafo = document.querySelector("#para1");

    paragrafo.addEventListener("click",trocaTexto);
    paragrafo.addEventListener("mouseover",mudaVerde);
    paragrafo.addEventListener("mouseout",mudaVermelho);

    function trocaTexto(){
        paragrafo.innerHTML="ttt"
    }
    
    function mudaVerde(){
        paragrafo.style.background="green"
    }
    
    function mudaVermelho(){
        paragrafo.style.background="red"
    }

    let botao = document.querySelector("#botao");

    botao.style.background="red";