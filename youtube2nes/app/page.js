'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const endDate = new Date('2023-09-21').getTime()
      const startDate = new Date().getTime()
      const diffDate = endDate - startDate

      setCountdown(() => ({
        days: Math.floor(diffDate / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diffDate / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diffDate / (1000 * 60)) % 60),
        seconds: Math.floor((diffDate / 1000) % 60)
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mt-10">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': countdown.days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': countdown.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': countdown.minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': countdown.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  )
}
