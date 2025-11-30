console.log("Empezamos!!")


//<------------------------------------------RELOJ------------------------------------------------------>
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





        let Mayus =["ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"];
        let Minus =["abcdefghijklmnñopqrstuvwxyz"];
        let number =["0123456789"];
        let simbols = ["!@#$%^&*()-_=+"];



        function password() {
            const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()-_=+";
            const maxLength = 16;
            let contrasena ="";

            for (let i =0; i < maxLength; i++) {
                let randomPass = Math.floor(Math.random() * caracteres);
                contrasena = caracteres[randomPass];
            }

            document.getElementById("contrasena").value= contrasena


        }
        
//<-----------------------------------MIS LINKS FAVORITOS------------------------------------------------------------->

const urlMovies = "https://www.imdb.com/es-es/"
const urlGames = "https://www.mobygames.com/"
const urlBooks = "https://www.goodreads.com/"
const urlCook =  "https://www.allrecipes.com/"






//<------------------------------------CLIMA/TEMPORAL------------------------------------------------------------->

const urlClima = "https://www.weatherapi.com/"
























