const colorVerde = document.getElementById("green");
const colorRojo = document.getElementById("red");
const colorAmarillo = document.getElementById("yellow");
const colorAzul = document.getElementById("blue");
const svg1 = document.querySelector(".dibujo")
let colorSeleccionado = "white";


colorVerde.addEventListener("click", selectColor);
colorRojo.addEventListener('click', selectColor);
colorAmarillo.addEventListener('click', selectColor);
colorAzul.addEventListener('click', selectColor);
svg1.addEventListener("click", pintar);



function selectColor(e) {
    //console.log(e);
    colorSeleccionado = e.target.id;
    acuarela = document.querySelectorAll(".color");
    //console.log(acuarela);


    acuarela.forEach(element => {
        element.style.border = "3px solid rgb(175,175,175)";
    });

    document.getElementById(colorSeleccionado).style.border = "3px solid lightseagreen";
}


function pintar(e) {
    elementoApintar = e.target;
    console.log(elementoApintar)

    elementoApintar.setAttribute("fill", colorSeleccionado);



}