// const logo = document.querySelector('#logo')
// const city = document.querySelector('#city')
// const state = document.querySelector('#state')
// const transition = document.querySelector('#transition')

// class Playlist {
//     counter = 1
//     videos = []
//     player
//     playlist
    
    // constructor(player, videos) {
    //     this.videos = videos
    //     this.player = player
    //     this.player.on('ended', () => {
    //         if (this.counter === 1) {
    //             this.init()
    //             this.counter += 1
    //             this.changeVideo();
    //             return
    //         }

    //         transition.dataset.active='true'

    //     })
      
    // }

    // iniciar() {
        
    // }
    
    // async init() {
    //     // this.iniciar()
    //     this.getLogo()
    //     this.cityState()
    //     this.checkPlaylist()
    //     this.lastVideo()
        
    //     await this.player.loadVideo(this.videos[this.counter].embedLink)
    //     this.player.on('loaded', () => this.player.play())
    // }
    
    // changeVideo() {
    //     console.log(this.counter)
    //     this.counter += 1
        
    //     console.log('loading video')
    //     this.player.loadVideo(this.videos[this.counter].embedLink)
    //     console.log('video loaded')
        
    //     this.player.on('loaded', () => {
    //         this.player.play();
    //         transition.dataset.active='false'
    //     })
    // };

    // checkPlaylist() { 
    //     const fetchPlaylist = async () => {
    //         this.checkDevice()
    //         let fetchedPlaylist = await getPlaylist()

    //         if (JSON.stringify(this.playlist) !== JSON.stringify(fetchedPlaylist)) {
    //             this.playlist = fetchedPlaylist
    //             this.videos = fetchedPlaylist.videos

    //         }
    //     }
    //     setInterval(fetchPlaylist,10000);
    // }

    // lastVideo() {
    //     console.log(this.counter, this.videos.length)
    //     if( this.counter === this.videos.length){
    //         this.counter = 0
    //     }
    // }

    // async getLogo() {
    //     const user = await getUser()
    //     const img = user.logo
    //     logo.src = img
    // }

    // async cityState() {
    //     const user = await getUser()
    //     const cidade = user.city
    //     const estado = user.state
    //     city.innerHTML = cidade + ",  " + estado
    // }

//    async checkDevice() {
//         const device_id = getActiveDevice() 

//        try {
//             await api.get(`/users/device/${device_id}`)

//        } catch{
//             window.location = '../login/login.html'
//             localStorage.clear('deviceId')
//             console.log('Era pra limpar')
//         }
//     }
// };

// const playerSetup = () => {
//     return new Promise(async resolve => {
//         const videoContainer = document.querySelector('#videoContainer')
//         const iframe = document.createElement('iframe')
//         const playlist = await getPlaylist()
    
//         iframe.setAttribute('id', 'video')
//         iframe.setAttribute('src', `${playlist.videos[0].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`) 
//         videoContainer.appendChild(iframe)
//         resolve()
//     })
// }

// playerSetup()
//     .then(async () => {
//         const videos = await getVideos()

//         const playerVideo = document.getElementById('#video')
//         const player = new Vimeo.Player('video') 
//         const playlist = new Playlist(player, videos)
//         playlist.init()
//     })
