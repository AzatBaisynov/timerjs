let display = document.querySelector('.timer__display')
let startBtn = document.querySelector('.timer__start')
let pauseBtn = document.querySelector('.timer__pause')
let stopBtn = document.querySelector('.timer__end')

let seconds = 0
let minutes = 0
let hours = 0
let t

const add = () => {
    seconds++
    if (seconds === 60) {
        seconds = 0
        minutes++
        if (minutes === 60) {
            minutes = 0
            hours++
        }
    }
    show()
}

const show = () => {
    let secPretty = seconds
    let minPretty = minutes
    let hourPretty = hours
    seconds < 10 && (secPretty = '0' + seconds)
    minutes < 10 && (minPretty = '0' + minutes)
    hours < 10 && (hourPretty = '0' + hours)
    display.innerHTML = `${hourPretty}:${minPretty}:${secPretty}`
}

startBtn.addEventListener('click', () => {
    t = setInterval(add, 1000)
})

pauseBtn.addEventListener('click', () => {
    t = clearInterval(t)
})

stopBtn.addEventListener('click', () => {
    t = clearInterval(t)
    display.innerHTML = '00:00:00'
    seconds = 0
    minutes = 0
    hours = 0
})
