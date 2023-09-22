const transition = document.querySelector('#transition')

class Playlist {
    counter = 0
    videos = []
    iframe
    player
    playlist

    constructor(player, videos, iframe) {
        this.videos = videos
        this.iframe = iframe
        this.player = player
        // this.player.on('ended', () => {
        //     this.lastVideo()
        //     // this.counter += 1


        //     this.play()
        //         this.videos.play()
        //         // this.changeVideo();
        //         return
            
        //     // transition.dataset.active='true'
        // })     
    }

    play() {

        this.player.on('ended', () => {
            console.log('acabou')
            if(this.counter <= this.videos.length){
                this.counter += 1
            }else{
                this.counter = 0
            }
            this.playVideo()
        } )
        this.playVideo()
        
        // this.checkUpdatePlaylist()
        // console.log(this.counter)
        
        // this.player.loadVideo(`${this.videos[this.counter].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`);
      
        // this.iframe.src = `${this.videos[this.counter].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`
        // console.log(this.iframe.src)
        // this.player.on('loaded', () => {
            
        //     this.player.play();
        //     // transition.dataset.active='false'
        // })
        
    }

    playVideo(){
        this.player.loadVideo(`${this.videos[this.counter].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`)
        console.log(this.iframe.src)
        this.player.on('loaded', () => {
            this.player.play()
            console.log('logou')
        })
        this.iframe.src = `${this.videos[this.counter].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`
        this.player.on('ended', ()=> {
            this.play()
        })
    }

//------- start all the class methods and start the video ↑

    // changeVideo() {
    
    //     this.counter += 1
    //     this.player.loadVideo(`${this.videos[this.counter].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`);
    //     this.player.on('loaded', () => {
    //         this.player.play();
    //         // transition.dataset.active='false'
    //     });
    // }

//------- go back to the beginning if the video is the last ↑

    lastVideo() {
        if( this.counter === this.videos.length){
            this.counter = 0
        }
    }

//------- go back to the beginning if the video is the last ↑

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

//------- checking if there have been any changes to the playlist and updating it ↑
}

const playerSetup = () => {
    return new Promise(async resolve => {
        const videoContainer = document.querySelector('#videoContainer')
        const iframe = document.createElement('iframe')
        const playlist = await getPlaylist()
        iframe.setAttribute('id', 'video')
        iframe.setAttribute('src', `${playlist.videos[0].embedLink}&autoplay=true&muted=true&controls=false&responsive=true`) 
        videoContainer.appendChild(iframe)
        resolve()
    })
}

//------- create the iframe and place its attributes ↑

playerSetup()
    .then(async () => {
        const iframe = document.querySelector("#video")
        const videos = await getVideos()
        const player = new Vimeo.Player('video') 
        const playlist = new Playlist(player, videos, iframe)
        playlist.play()
    })