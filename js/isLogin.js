const checkDeviceId = async () => {
    const device_id = getActiveDevice() 

   try {
        await api.get(`/users/device/${device_id}`)

   } catch{
        window.location = '../login/login.html'
        localStorage.clear('deviceId')
        console.log('Era pra limpar')
    }
}

checkDeviceId()

//-------checking if the device_id remains the same, or has been changed to log out ↑