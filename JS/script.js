console.log("Empezamos!!")



//<-------------------------------CONTRASEÑA SEGURA-------------------------------------------------------->
// script.js

function generarPass() {
    const longitudPass = parseInt(document.getElementById("longitud").value);

    if (longitudPass < 12 || longitudPass > 50) {
        alert("La longitud debe estar entre 12 y 50");
        return;
    }

    let Mayus   = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let Minus   = "abcdefghijklmnñopqrstuvwxyz";
    let number  = "0123456789";
    let simbols = "!@#$%^&*()-_=+";

    let pool = Mayus + Minus + number + simbols;

    let password = "";

    
    password += getrandomCharacter(Mayus);
    password += getrandomCharacter(Minus);
    password += getrandomCharacter(number);
    password += getrandomCharacter(simbols);

    
    for (let i = 4; i < longitudPass; i++) {
        password += getrandomCharacter(pool);
    }

    
    password = mezclar(password);

    
    const mostrarPassword = document.getElementById("mostrarPassword");
    mostrarPassword.innerText = "contraseña generada :" + password; 
}

function getrandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function mezclar(str) {
    let arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

        
//<-----------------------------------MIS LINKS FAVORITOS------------------------------------------------------------->

const urlMovies = "https://www.imdb.com/es-es/"
const urlGames = "https://www.mobygames.com/"
const urlBooks = "https://www.goodreads.com/"
const urlCook =  "https://www.allrecipes.com/"






//<------------------------------------CLIMA/TEMPORAL------------------------------------------------------------->

const urlClima = "https://www.weatherapi.com/"
























