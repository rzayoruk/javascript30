const timerDisplay = document.querySelector(".display__time-left")
const endTimeDisplay = document.querySelector(".display__end-time")
const buttons = document.querySelectorAll("[data-time]")
const form = document.customForm

form.addEventListener("submit", function (e) {
  e.preventDefault()
  //   console.log(this.minutes.value)
  timer(this.minutes.value * 60)
  this.reset()
})
let countdown

buttons.forEach((button) => button.addEventListener("click", startTimer))

function startTimer() {
  timer(this.dataset.time)
}

function timer(seconds) {
  const now = Date.now()

  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  clearInterval(countdown)
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)

    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const timeFormat = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`
  document.title = timeFormat
  timerDisplay.textContent = timeFormat
}

function displayEndTime(timestamp) {
  const endTime = new Date(timestamp)
  const hour = (endTime.getHours() < 10 ? "0" : "") + endTime.getHours()
  const minute = (endTime.getMinutes() < 10 ? "0" : "") + endTime.getMinutes()
  const second = (endTime.getSeconds() < 10 ? "0" : "") + endTime.getSeconds()
  endTimeDisplay.textContent = `Be back at ${hour}:${minute}:${second}`
}
