console.log("Empezamos!!")





        
//<-----------------------------------MIS LINKS FAVORITOS------------------------------------------------------------->

const urlMovies = "https://www.imdb.com/es-es/"
const urlGames = "https://www.mobygames.com/"
const urlBooks = "https://www.goodreads.com/"
const urlCook =  "https://www.allrecipes.com/"






//<------------------------------------CLIMA/TEMPORAL------------------------------------------------------------->

const urlClimaActual = "https://api.weatherapi.com/v1/current.json?key=7839efe96b9c4409974201359252611&q=Madrid&aqi=no"
const urlClimaSemanal = "https://api.weatherapi.com/v1/forecast.json?key=7839efe96b9c4409974201359252611&q=Madrid&days=7&aqi=no&alerts=no"
const API_KEY = "7839efe96b9c4409974201359252611"
const baseUrl = "https://api.weatherapi.com/v1" 
const CITY = "Madrid"

const DAYS = 7

const climaAhoraContainer = document.getElementById("climaAhoraContainer")
const climaSemanaContainer = document.getElementById("climaSemanaContainer")
const errorContainer = document.getElementById("error")

async function getclimaActualMadrid (){
    const url =`${baseUrl}/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
    const response =await fetch(url)

    if (!response.ok) {
        const text = await response.text()
        throw new Error (`HTTP ${response.status} - ${text}`)
    }

    const data= await response.json()
    console.log(data)
    return data
}

async function getClimaSemanal (){
    const url =`${baseUrl}/forecast.json?key=${API_KEY}&q=${CITY}&days=${DAYS}&aqi=no&alerts=no`
    const response =await fetch(url)

    if (!response.ok) {
        const text = await response.text()
        throw new Error (`HTTP ${response.status} - ${text}`)
    }


    const data =await response.json()
    return data
}

function renderClimaActual(data){
    climaAhoraContainer.innerHTML=""
    const html =`
    <h2>Tiempo de hoy en Madrid</h2>
    <p>${data.current.temp_c} ºC</p>
    <p>${data.current.condition.text}</p>
    `
    climaAhoraContainer.innerHTML= html
}

function renderClimaSemana (data) {
    climaSemanaContainer.innerHTML =""
    const dias = data.forecast.forecastday

    const htmlDias = dias.map((d)=>{
        return `
        <article>`
    })
}





getclimaActualMadrid()
getClimaSemanal()

















