let imagens=["/assets/img/A1.png","/assets/img/A2.png","/assets/img/A3.jpg"];
let index = 0;
let time = 3000;

function slideShow(){

document.getElementById("imgbanner").src=imagens[index];
index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()", time);
}
slideShow();


function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (nome === "gojo" && senha === "omaisforte") {
        alert("Redirecionando")
        window.location.href = "/assets/perfil.html";
        return false; 
    } else {
        alert("Nome de usuário ou senha incorretos!");
        return true;
    }
}