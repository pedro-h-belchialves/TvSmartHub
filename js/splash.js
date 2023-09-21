const splash = document.querySelector('#splash')

function checkAuthenticated () {
	const active_device = getActiveDevice()

	if(active_device){
		window.location = '../reproduction/reproduction.html'
		
	}else{
		window.location = '../login/login.html'
	}
} 

setTimeout(checkAuthenticated, 2000)