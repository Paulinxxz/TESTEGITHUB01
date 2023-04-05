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

function somarValores(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 + s2;
    alert(s3);
}
