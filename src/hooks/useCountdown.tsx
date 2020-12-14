import { useEffect, useState } from 'react'

export function useCountdown(discountTime) {
  const [time, setTime] = useState(discountTime)
  useEffect(() => {
    const begin = +new Date()
    const timer = setInterval(() => {
      const currentDiff = time - (+new Date() - begin)

      setTime(currentDiff)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [time])

  return time
}
