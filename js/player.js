const transition = document.querySelector('#transition')

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

playerSetup()
    .then(async () => {
        
        const videos = await getVideos()
        const player = new Vimeo.Player('video') 
        const playlist = new Playlist(player, videos)
        playlist.checkUpdatePlaylist()
})