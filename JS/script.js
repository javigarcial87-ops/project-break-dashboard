console.log("Empezamos!!")


//<------------------------------------------RELOJ------------------------------------------------------>

function getMensajeReloj (){
    const date = new Date()
    const h = date.getHours()
    const m =date.getMinutes()
    const total =  h*60 +m

    const toMin = (hh,mm)=>hh*60 + mm


    if (total>= toMin(0,1) && total<= toMin(7,0)){
        return "A descansar, hasta mañana"
    }else if (total>=toMin(7,1)&& total<=toMin(12,0)){
        return "Buenos días, a codear se ha dicho!!"
    }else if (total>= toMin(12,1)&& total<=toMin(14,0)){
        return "Sigue un rato, pero...habrá que comer no??"
    }else if (total>= toMin(14,1)&& total<=toMin(16,0)) {
        return "Digestión"
    }else if (total>=(16,1)&& total<=(18.0)){
        return "Un ratito más de codeo"
    }else if (total>=(18,1)&& total<=toMin(22,0)){
        return "Hay que empezar a plantearse un descanso"
    }else {
        return "Buenas noches, a descansar...ZZzzz"
    }

}


function showTime(){
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh=(hh < 10) ? "0" + hh : hh;
    mm=(mm < 10) ? "0" + mm : mm;
    ss= (ss < 10) ? "0" + ss :ss;

    let time = `${hh}:${mm}:${ss}`   
    document.getElementById("watch").innerHTML=time
    document.getElementById("frase").innerHTML=getMensajeReloj()
    }

 //<----------------------------------CALENDARIO Y FECHAS------------------------------------------------------->     

    function showDate(){
        let date = new Date();
        const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
        const meses = ["Enero","Febrero","Marzo","Abríl","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        
        let dayName = dias[date.getDay()];
        let day = date.getDate();
        let month = meses[date.getMonth()];
        let year = date.getFullYear();
        
        let fullDate = `${dayName},${day} de ${month} de ${year}`;
        document.getElementById("calendar").innerHTML= fullDate;
        }

        setInterval(showTime,1000);
        setInterval(showDate,60000);

        showTime();
        showDate();

        


//<-------------------------------CONTRASEÑA SEGURA-------------------------------------------------------->
function generarPass(){
    const longitudPass = 16
    if(longitudPass<12||longitudPass>50){
        alert("la longitud debe estar entre 12 y 50")
        return
    }


        let Mayus =["ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"];
        let Minus =["abcdefghijklmnñopqrstuvwxyz"];
        let number =["0123456789"];
        let simbols = ["!@#$%^&*()-_=+"];
        let pool = Mayus + Minus + number+ simbols;


    password += getrandomCharacter(Mayus)
    password += getrandomCharacter(Minus)
    password += getrandomCharacter(number)
    password += getrandomCharacter(simbols)


    for(let i =4;i <longitudPass; i++){
        password +=getrandomCharacter(pool)
        
    }

    password = getrandomCharacter(password)

    mostrarPassword.innerHTML(password)

}
        // function password() {
        //     const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()-_=+";
        //     const maxLength = 16;
        //     let password ="";

        //     for (let i =0; i < maxLength; i++) {
        //         let randomPass = Math.floor(Math.random() * caracteres);
        //         password = caracteres[randomPass];
        //     }

        //     document.getElementById("contrasena").value= password


        // }
        
//<-----------------------------------MIS LINKS FAVORITOS------------------------------------------------------------->

const urlMovies = "https://www.imdb.com/es-es/"
const urlGames = "https://www.mobygames.com/"
const urlBooks = "https://www.goodreads.com/"
const urlCook =  "https://www.allrecipes.com/"






//<------------------------------------CLIMA/TEMPORAL------------------------------------------------------------->

const urlClima = "https://www.weatherapi.com/"
























