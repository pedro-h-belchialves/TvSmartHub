const api = axios.create({
    baseURL: 'https://api.tvgpr.com.br',
    timeout: 10000,
  });

const authenticateUser = async function(token) {
    const { data } = await api.post('/auth/token', {
        token
    })

    return data.device
}

const getActiveDevice = function() {
    const device_id = localStorage.getItem('deviceId')
    return device_id
}

const getUser = async function() {
    const deviceId = getActiveDevice()
    const { data } = await api.get(`/users/device/${deviceId}`)

    return data.user 
}

const getPlaylist = async function() {
    const deviceID = getActiveDevice()
   const { data } = await api.get(`/playlists/device/${deviceID}`)
    return data.playlist
}

const getVideos = async function() {
    const playlist = await getPlaylist()
    const videos = playlist.videos
    return videos
}