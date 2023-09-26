const temp = document.querySelector('#temp')
const img = document.querySelector('#imgClima')
    
    const users = async () => {
        const user =  await getUser()

        const coordinates = user.coordinates

        const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?${coordinates.replace('latitude', 'lat').replace('longitude','lon',)}&exclude=minutely,alerts&units=metric&appid=146a21dfc0785f0624e56f862451cc32`) 

        const graus = parseInt(data.current.temp)

        const weather = data.current.weather[0]

        const id = weather.id

        const icon = weather.icon

        temp.innerHTML = graus

        let isDay;

        if(icon.includes('d')){
            isDay = true
        }else{
            isDay = false
            
        }
        
        if(id > 800 && id < 805){

            if(isDay){
                img.src = '../images/broken.png'
            }else{
                img.src = '../images/brokenNight.png'
            }

        } else if(id === 800){

            if(isDay){
                img.src = '../images/sun.png'
            }else{
                img.src = '../images/moon.png'
            } 

        } else if(id >= 701 && id <= 781){

            img.src = '../images/fog.png'  

        } else if(id >= 600 && id <= 622){

            img.src = '../images/snow.png'

        } else if(id >= 500 && id <= 531){

            if(isDay){
                img.src = '../images/rainSun.png'
            }else{
                img.src = '../images/rainNight.png'
            } 

        } else if(id >= 300 && id <= 321){

            img.src = '../images/drizzle.png'

        } else if(id >= 200 && id <= 232){

            if(isDay){
                img.src = '../images/storm.png'
            }else{
                img.src = '../images/stormNight.png'
            } 

        }
    } 


users()