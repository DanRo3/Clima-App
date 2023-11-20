//https://api.openweathermap.org/data/2.5/weather?q=habana&appid=5eca7ee42cb45b141e0ac7c6356f13cf&units=metric
const myKey ='5eca7ee42cb45b141e0ac7c6356f13cf';
const URL ='https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=';
const input = document.getElementById('input');
const botonBuscar = document.getElementById('buscar');
const imgTiempo = document.querySelector('.img-tiempo');

async function tiempo(ciudad){
    const response = await fetch(URL+ciudad+`&appid=${myKey}`);
    let data =  await response.json();

    if(response.status == 404){
        document.querySelector(".NonFound").style.display = "block";
        document.querySelector('.tiempo').style.display = "none";
    }else{
        
        document.querySelector(".ciudad").innerHTML = data.name;
        document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + ' °c';
        document.querySelector(".humedad").innerHTML = data.main.humidity + '%';
        document.querySelector(".viento").innerHTML = data.wind.speed + 'km/h';
        if(data.weather[0].main=="Clear"){
            imgTiempo.src = 'images/clear.png';
        }
        else if(data.weather[0].main == "Clouds"){
            imgTiempo.src = 'images/clouds.png';
        }
        else if(data.weather[0].main == "Drizzle"){
            imgTiempo.src = 'images/drizzle.png';
        }
        else if(data.weather[0].main == "Mist"){
            imgTiempo.src = 'images/mist.png';
        }
        else if(data.weather[0].main == "Rain"){
            imgTiempo.src = 'images/rain.png';
        }
        else if(data.weather[0].main == Snow){
            imgTiempo.src = 'images/snow.png';
        }
        
        document.querySelector('.tiempo').style.display = "block";
        document.querySelector(".NonFound").style.display = "none";
    }
    input.value = "";
    input.focus();

}

botonBuscar.addEventListener("click",()=>{
    if(input.value !=""){
        tiempo(input.value);
    }
})

input.focus();