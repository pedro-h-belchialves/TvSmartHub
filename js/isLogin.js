// const checkDeviceId = async () => {
//     const device_id = getActiveDevice() 

//   if(navigator.onLine){
//     console.log('online')
//     try {
//         await api.get(`/users/device/${device_id}`)
        
//     } catch{
//         window.location = '../login/login.html'
//         localStorage.clear('deviceId')
//     }
// }else{
//       console.log('offline')
    
//   }
// }


async function checkDeviceId() {
    const device_id = getActiveDevice() 
    
      if(navigator.onLine){
        console.log('online')
        try {
            await api.get(`/users/device/${device_id}`)
            
        } catch{
            window.location = '../login/login.html'
            localStorage.clear('deviceId')
        }
    }else{
        console.log('offline')
        
    }
}

setInterval(() => {checkDeviceId()}, 10000)

//-------checking if the device_id remains the same, or has been changed to log out ↑