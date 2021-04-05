import { useEffect, useState } from "react"

export default function useCountDown(timeCountDown) {

  let [time, setTime] = useState(timeCountDown)

  useEffect(() => {
    let timeinterval = setInterval(() => {
      if (time === 0) {
        return clearTimeout(timeinterval)
      }
      setTime(--time)
    }, 1000)
  }, [])


  let day = parseInt(time / 60 / 60 / 24)

  let hours = parseInt(time / 60 / 60 - day * 24)

  let minute = parseInt(time / 60 - (day * 24 + hours) * 60)

  let seconds = time % 60

  return {
    day,
    hours,
    minute,
    seconds,
  }
}