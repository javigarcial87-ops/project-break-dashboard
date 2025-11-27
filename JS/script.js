console.log("Empezamos!!")

function currentTime(){
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

        hh=(hh < 10) ? "0" + hh : hh;
        mm=(mm < 10) ? "0" + mm : mm;
        ss= (ss < 10) ? "0" + ss :ss;

        let time = `${hh}:${mm}:${ss}`
        
        

        }

        setInterval(currentTime, 1000);

        function currentDate(){
           const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
        const meses = ["Enero","Febrero","Marzo","Abríl","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        
        let dayName = dias[date.getDay()];
        let day = date.getDate();
        let month = meses[date.getMonth()];
        let year = date.getFullYear();
        
        let fullDate = `${dayName},${day} de ${month} de ${year}`;
        document.getElementById("watch").innerHTML= `${fullDate} <br> ${time}`; 
        }

        setInterval(currentDate)













