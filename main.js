document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}

function somar()
{
    let usuario = document.getElementById( "number1" ).value;
    let usuario = document.getElementById( "number2" ).value;
}

function dividir()
{
    let usuario = document.getElementById( "number3" ).value;
    let usuario = document.getElementById( "number4" ).value;
}

function multiplicar()
{
    let usuario = document.getElementById( "number5" ).value;
    let usuario = document.getElementById( "number6" ).value;
}

function subtrair()
{
    let usuario = document.getElementById( "number7" ).value;
    let usuario = document.getElementById( "number8" ).value;
}