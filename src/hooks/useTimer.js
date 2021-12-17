import { useState, useEffect } from 'react'

const useTimer = (date) => {
  const getUtcTime = (date) => {
    return (date.getTime() + date.getTimezoneOffset() * 60 * 1000)
  }

  const [fDate, setFDate] = useState(date)

  const calculateTimeLeft = () => {
    const difference = getUtcTime(fDate) - getUtcTime(new Date())

    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24))
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60)
      timeLeft.seconds = Math.floor((difference / 1000) % 60)
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState({ days: '-', hours: '-', minutes: '-', seconds: '-' })

  const setDate = (date) => {
    setFDate(date)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return [timeLeft, setDate]
}

export default useTimer
