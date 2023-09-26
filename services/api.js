const api = axios.create({
    baseURL: 'https://api.tvgpr.com.br',
    timeout: 10000,
  });

const authenticateUser = async (token) => {
    const { data } = await api.post('/auth/token', {
        token
    })

    return data.device
}

const getActiveDevice = () => {
    const device_id = localStorage.getItem('deviceId')
    return device_id
}

const getUser = async () => {
    const deviceId = getActiveDevice()
    const { data } = await api.get(`/users/device/${deviceId}`)

    return data.user 
}

const getPlaylist = async () => {
    const deviceID = getActiveDevice()
   const { data } = await api.get(`/playlists/device/${deviceID}`)
    return data.playlist
}

const getVideos = async () => {
    const playlist = await getPlaylist()
    const videos = playlist.videos
    return videos
}

getActiveDevice()

