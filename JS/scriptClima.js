console.log("Empezamos!!")



//<------------------------------------CLIMA/TEMPORAL------------------------------------------------------------->

const urlClimaActual = "https://api.weatherapi.com/v1/current.json?key=7839efe96b9c4409974201359252611&q=Madrid&aqi=no"
const urlClimaSemanal = "https://api.weatherapi.com/v1/forecast.json?key=7839efe96b9c4409974201359252611&q=Madrid&days=7&aqi=no&alerts=no"
const API_KEY = "7839efe96b9c4409974201359252611"
const baseUrl = "https://api.weatherapi.com/v1" 
const CITY = "Madrid"

const DAYS = 3

const climaAhoraContainer = document.getElementById("climaAhoraContainer")
const climaSemanaContainer = document.getElementById("climaSemanaContainer")
const errorContainer = document.getElementById("error")

async function getclimaActualMadrid (){
    const url =`${baseUrl}/current.json?key=${API_KEY}&q=${CITY}&aqi=no&lang=es`
    const response =await fetch(url)

    if (!response.ok) {
        const text = await response.text()
        throw new Error (`HTTP ${response.status} - ${text}`)
    }

    const data= await response.json()
    
    return data
}

async function getClimaSemanal (){
    const url =`${baseUrl}/forecast.json?key=${API_KEY}&q=${CITY}&days=${DAYS}&aqi=no&alerts=no&lang=es`
    const response = await fetch(url)

    if (!response.ok) {
        const text = await response.text()
        throw new Error (`HTTP ${response.status} - ${text}`)
    }


    const data =await response.json()
    return data
}

function renderClimaActual(data){
    climaAhoraContainer.innerHTML = "";
    const html = `
        <h3>Para hoy</h3>
        <p>${data.current.temp_c} ºC</p>
        <p>${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" class="icon" alt="${data.current.condition.text}">
    `;
    climaAhoraContainer.innerHTML = html;
}

function renderClimaSemana(data) {
    climaSemanaContainer.innerHTML = "";
    const dias = data.forecast.forecastday;

    const htmlDias = dias.map((d) => {
        return `
            <article class="day">
                <img src="https:${d.day.condition.icon}" class="icons" alt="${d.day.condition.text}">
                <h3>${d.date}</h3>
                <p>Max: ${d.day.maxtemp_c} ºC</p>
                <p>Min: ${d.day.mintemp_c} ºC</p>
                <p>${d.day.condition.text}</p>
                
            </article>`;
    }).join("");

    climaSemanaContainer.innerHTML = `
        <h3>Próximos ${DAYS} días</h3> 
        ${htmlDias}
    `;
}

async function cargarMadrid() {
    try{
        climaAhoraContainer.innerHTML ="Cargando..."
        climaSemanaContainer.innerHTML = ""

        const[actual,forecast]=await Promise.all([
           getclimaActualMadrid(),
           getClimaSemanal() 
        ])

        renderClimaActual(actual)
        renderClimaSemana(forecast)
    } catch (err) {
        errorContainer.hidden= false
        errorContainer.textContent = "Error al cargar Madrid"
        console.error(err)
    }
}

cargarMadrid()
