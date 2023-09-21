const btn = document.getElementById('btn')
const input = document.getElementById('inputFocus')
const err = document.getElementById('error') 

btn.onclick = async () => {

    const token = input.value

    try{

        const device_id = await authenticateUser(token)
        localStorage.setItem('deviceId', device_id)
        window.location = '../reproduction/reproduction.html'

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

window.onload = () => input.focus()
getActiveDevice()