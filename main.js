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
    let numero1 = document.getElementById( "number1" ).value;
    let numero2 = document.getElementById( "number2" ).value;
    let numero3 = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById( "resultado1" ).innerHTML = " = " numero1 + numero2;
}

function dividir()
{
    let numero3 = document.getElementById( "number3" ).value;
    let numero4 = document.getElementById( "number4" ).value;
    document.getElementById( "resultado2" ).innerHTML = numero3 / numero4
}

function multiplicar()
{
    let numero5 = document.getElementById( "number5" ).value;
    let numero6 = document.getElementById( "number6" ).value;
    document.getElementById( "resultado3" ).innerHTML = numero5 * numero6
}

function subtrair()
{
    let numero7 = document.getElementById( "number7" ).value;
    let numero8 = document.getElementById( "number8" ).value;
    document.getElementById( "resultado4" ).innerHTML = numero7 - numero8

}