//===============================================================================


const splash = document.getElementById('splash')
const login = document.getElementById('login')
const reproduction = document.getElementById('reproduction')

function checkAuthenticated () {
	const active_device = getActiveDevice()

	if(active_device){
		splash.dataset.active = 'false'
		login.dataset.active = 'false'
		reproduction.dataset.active = 'true'
	}else{
		login.dataset.active = 'true'
		splash.dataset.active = 'false'
		reproduction.dataset.active = 'false'
	}
} 

setTimeout(checkAuthenticated, 2000)


//===============================================================================


const btn = document.getElementById('btn')
const input = document.getElementById('inputFocus')
const err = document.getElementById('error') 


btn.onclick = async function() {
    const token = input.value

    try{

        const device_id = await authenticateUser(token)
        localStorage.setItem('deviceId', device_id)
        splash.dataset.active = 'false'
        login.dataset.active = 'false'
		reproduction.dataset.active = 'true'

    } catch(error){

        input.value = ''
        input.focus()
        err.dataset.active='true'

        setTimeout(() => {
          err.dataset.active='false'  
        }, 3000);

        console.log(error)
    }
}

window.onload = function() { input.focus()}
getActiveDevice()


//===============================================================================


async function checkDeviceId() {
    const device_id = getActiveDevice()
  
    
    //   if(navigator.onLine){

        try {
          await api.get(`/users/device/${device_id}`)
        } catch (err) {
            localStorage.clear('deviceId')
            login.dataset.active = 'true'
            splash.dataset.active = 'false'
            reproduction.dataset.active = 'false'
        }

    // }
}

setInterval(checkDeviceId(), 10000)


//===============================================================================


const logo = document.getElementById('logo')
const city = document.getElementById('city')
const state = document.getElementById('state')

const getLogo = async function() {
    const user = await getUser()
    const img = user.logo
    logo.src = img
    console.log(logo)
}

const local = async function() {
    const user = await getUser()
    const cidade = user.city
    cidade[0].toUpperCase()
    const estado = user.state
    estado.toUpperCase()
    city.innerHTML = cidade + ', ' + estado
}

getLogo()
local()


//===============================================================================


const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const day = document.getElementById('day')
const month = document.getElementById('month')
const ampm = document.getElementById('ampm')

setInterval( function() {

    const setHour = new Date().getHours()
    const setMinutes = new Date().getMinutes()

    switch (setHour) {
        case 1:
            correct = '1';
            break
        case 2:
            correct = '2';
            break
        case 3:
            correct = '3';
            break
        case 4:
            correct = '4';
            break
        case 5:
            correct = '5';
            break
        case 6:
            correct = '6';
            break
        case 7:
            correct = '7';
            break
        case 8:
            correct =  '8';
            break
        case 9:
            correct = '9';
            break
        case 10:
            correct = '10';
            break
        case 11:
            correct = '11';
            break
        case 12:
            correct = '12';
            break
        case 13:
            correct = '1';
            break
        case 14:
            correct = '2';
            break
        case 15:
            correct = '3';
            break
        case 16:
            correct = '4';
            break
        case 17:
            correct = '5';
            break
        case 18:
            correct = '6';
            break
        case 19:
            correct = '7';
            break
        case 20:
            correct =  '8';
            break
        case 21:
            correct = '9';
            break
        case 22:
            correct = '10';
            break
        case 23:
            correct = '11';
            break
        case 24:
            correct = '12';
            break
    }

    if(correct < 10) {
    
        hour.innerHTML = '0' + correct
        
    }else{

        hour.innerHTML = correct

    }
    

    if(setHour < 12){

        ampm.innerHTML = 'AM'

    }else{

        ampm.innerHTML = 'PM'

    }

if(setMinutes < 10) {
    
    minutes.innerHTML = '0' + setMinutes
    
}else{

    minutes.innerHTML = setMinutes
    
}

} ,1000 )

const setDay = new Date().getDate()
day.innerHTML = setDay

const setMonth = new Date().getMonth() + 1

switch (setMonth) {
    case 1:
        monthName = 'jan';
        break
    case 2:
        monthName = 'fev';
        break
    case 3:
        monthName = 'mar';
        break
    case 4:
        monthName = 'abr';
        break
    case 5:
        monthName = 'mai';
        break
    case 6:
        monthName = 'jun';
        break
    case 7:
        monthName = 'jul';
        break
    case 8:
        monthName =  'ago';
        break
    case 9:
        monthName = 'set';
        break
    case 10:
        monthName = 'out';
        break
    case 11:
        monthName = 'nov';
        break
    case 12:
        monthName = 'dez';
        break
}

month.innerHTML = monthName


//===============================================================================


const temp = document.getElementById('temp')
const img = document.getElementById('imgClima')
    
    const users = async function() {
        const user =  await getUser()

        const coordinates = user.coordinates

        const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?${coordinates.replace('latitude', 'lat').replace('longitude','lon')}&exclude=minutely,alerts&units=metric&appid=146a21dfc0785f0624e56f862451cc32`) 

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

setInterval(users(), 300000 )


//===============================================================================


const transition = document.getElementById('transition')

class Playlist {
    counter = 0
    videos = []
    player
    playlist

    constructor(player, videos) {
        this.videos = videos
        this.player = player
        
        this.player.on('ended', async () => {
            transition.dataset.active = 'true'

            if (this.counter >= this.videos.length - 1){
                this.counter = 0
                this.player.loadVideo(this.videos[this.counter].embedLink)
            }else{
                this.counter += 1
                this.player.loadVideo(this.videos[this.counter].embedLink)
            }
           
            })
            
        this.player.on('play', async () => {
                transition.dataset.active = 'false'
        })
    }

    checkUpdatePlaylist() { 
        const fetchPlaylist = async () => {
            checkDeviceId()
            let fetchedPlaylist = await getPlaylist()

            if (JSON.stringify(this.playlist) !== JSON.stringify(fetchedPlaylist)) {
                this.playlist = fetchedPlaylist
                this.videos = fetchedPlaylist.videos
            }
        }
        setInterval(fetchPlaylist,10000);
    }
}

const playerSetup = function() {
    return new Promise(async resolve => {
        const videoContainer = document.getElementById('videoContainer')
        const iframe = document.createElement('iframe')
        const playlist = await getPlaylist()
        iframe.setAttribute('id', 'video')
        iframe.setAttribute('src', `${playlist.videos[0].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`) 
        videoContainer.appendChild(iframe)
        resolve()
    })
}

playerSetup()
    .then(async function() {
        
        const videos = await getVideos()
        const player = new Vimeo.Player('video') 
        const playlist = new Playlist(player, videos)
        playlist.checkUpdatePlaylist()
})