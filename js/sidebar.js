const logo = document.querySelector('#logo')
const city = document.querySelector('#city')
const state = document.querySelector('#state')


//------- Imports ↑

const getLogo = async () => {
    const user = await getUser()
    const img = user.logo
    logo.src = img
}

//------- taking the logo and placing it in the sidebar ↑

const local = async () => {
    const user = await getUser()
    const cidade = user.city
    const estado = user.state
    city.innerHTML = cidade + ', ' + estado
}

//------- getting the user's city and state ↑

getLogo()
local()