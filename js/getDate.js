const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const ampm = document.querySelector('#ampm')

//--------- Imports ↑

setInterval( () => {

    const setHour = new Date().getHours()
    const setMinutes = new Date().getMinutes()

    switch (setHour) {
        case 1:
            correct = '1';
            break
        case 2:
            correct = '2';
            break
        case 3:
            correct = '3';
            break
        case 4:
            correct = '4';
            break
        case 5:
            correct = '5';
            break
        case 6:
            correct = '6';
            break
        case 7:
            correct = '7';
            break
        case 8:
            correct =  '8';
            break
        case 9:
            correct = '9';
            break
        case 10:
            correct = '10';
            break
        case 11:
            correct = '11';
            break
        case 12:
            correct = '12';
            break
        case 13:
            correct = '1';
            break
        case 14:
            correct = '2';
            break
        case 15:
            correct = '3';
            break
        case 16:
            correct = '4';
            break
        case 17:
            correct = '5';
            break
        case 18:
            correct = '6';
            break
        case 19:
            correct = '7';
            break
        case 20:
            correct =  '8';
            break
        case 21:
            correct = '9';
            break
        case 22:
            correct = '10';
            break
        case 23:
            correct = '11';
            break
        case 24:
            correct = '12';
            break
    }

    if(correct < 10) {
    
        hour.innerHTML = '0' + correct
        
    }else{

        hour.innerHTML = correct

    }
    

    if(setHour < 12){

        ampm.innerHTML = 'AM'

    }else{

        ampm.innerHTML = 'PM'

    }

if(setMinutes < 10) {
    
    minutes.innerHTML = '0' + setMinutes
    
}else{

    minutes.innerHTML = setMinutes
    
}

} ,1000 )

//--------- add the number 0 if it is less than 10 ↑

const setDay = new Date().getDate()
day.innerHTML = setDay

//--------- get the number of the day ↑

const setMonth = new Date().getMonth() + 1

switch (setMonth) {
    case 1:
        monthName = 'jan';
        break
    case 2:
        monthName = 'fev';
        break
    case 3:
        monthName = 'mar';
        break
    case 4:
        monthName = 'abr';
        break
    case 5:
        monthName = 'mai';
        break
    case 6:
        monthName = 'jun';
        break
    case 7:
        monthName = 'jul';
        break
    case 8:
        monthName =  'ago';
        break
    case 9:
        monthName = 'set';
        break
    case 10:
        monthName = 'out';
        break
    case 11:
        monthName = 'nov';
        break
    case 12:
        monthName = 'dez';
        break
}

month.innerHTML = monthName

//--------- getting the month number and converting it to a string ↑
