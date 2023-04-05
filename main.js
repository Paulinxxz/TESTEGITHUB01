document.addEventListener( "click" , showcolor );

document.getElementById( "somar" ).addEventListener( "click" , somar);

document.getElementById( "dividir" ).addEventListener( "click" , dividir);

document.getElementById( "multiplicar" ).addEventListener( "click" , multiplicar);

document.getElementById( "subtrair" ).addEventListener( "click" , subtrair);

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
    let numero1 = document.getElementById( "number1" ).value;
    let numero2 = document.getElementById( "number2" ).value;
    let numero3 = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById( "resultado1" ).innerHTML = " = " + numero3;
}

function dividir()
{
    let numero4 = document.getElementById( "number4" ).value;
    let numero5 = document.getElementById( "number5" ).value;
    let numero6 = parseFloat(numero4) / parseFloat(numero5);
    document.getElementById( "resultado2" ).innerHTML = " = " + numero6;
}

function multiplicar()
{
    let numero7 = document.getElementById( "number7" ).value;
    let numero8 = document.getElementById( "number8" ).value;
    let numero9 = parseFloat(numero7) * parseFloat(numero8);
    document.getElementById( "resultado3" ).innerHTML = " = " + numero9;
}

function subtrair()
{
    let numero10 = document.getElementById( "number10" ).value;
    let numero11 = document.getElementById( "number11" ).value;
    let numero12 = parseFloat(numero10) - parseFloat(numero11);
    document.getElementById( "resultado4" ).innerHTML = " = " + numero12;
}