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
        this.player.on('ended', async ()=>{
            if (this.counter >= this.videos.length){
                this.counter = 0
            }else{
                this.counter += 1
            }
            await this.player.loadVideo(this.videos[this.counter].embedLink)
            this.player.on('loaded', () => this.player.play())
        })
    
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
        playlist.checkUpdatePlaylist()
        playlist.play()
    })