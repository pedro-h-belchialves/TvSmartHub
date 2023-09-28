
async function checkDeviceId() {
    const device_id = await getActiveDevice() 
    
      if(navigator.onLine){

        const device = await api.get(`/users/device/${device_id}`)

        if(!device) {
            localStorage.clear('deviceId')
            window.location.replace('../login/login.html')
          
        }

    }
}

setInterval(() => {checkDeviceId()}, 10000)

//-------checking if the device_id remains the same, or has been changed to log out ↑