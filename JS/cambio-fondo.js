console.log("empezamos!!");

const imagenes = ["img/brillo_1.jpg","img/brillo_2.jpg","img/clear_1.jpg","img/landing_fondo_1.jpg","img/landing_fondo_3.jpg","img/nebulosa_1.jpg","img/nebulosa_3.jpg","img/nubes_cielo_1.jpg","img/nubes_cielo_6.jpg","img/nubes_cielo_4.jpg"]

let index = 0;

document.documentElement.style.height = "100%";
document.body.style.height = "100%";
document.body.style.minHeight = "100vh";
document.body.style.transition ="background-image 1s ease-in-out";


function cambiarFondoImagen() {
    document.body.style.backgroundImage = `url(${imagenes[index]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    index = (index +1) % imagenes.length;
}


setInterval(cambiarFondoImagen,10000);
cambiarFondoImagen();
























