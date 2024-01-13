"use client";
import { useState, useEffect } from "react";
export default function CountDown() {
    const [countdown, setCountdown] = useState("");
  
    useEffect(() => {
      const interval = setInterval(() => {
        const endDate = new Date("2024-3-15").getTime();
        const startDate = new Date().getTime();
        const diffDate = endDate - startDate;
  
        setCountdown(() => ({
          days: Math.floor(diffDate / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diffDate / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diffDate / (1000 * 60)) % 60),
          seconds: Math.floor((diffDate / 1000) % 60),
        }));
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return(
        <>
        <div className="grid grid-flow-col gap-3 text-center auto-cols-max justify-center py-4 bg-lime-300">
        <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-base sm:text-2xl">
            <span style={{ "--value": countdown.days }}></span>
          </span>
          <span className="text-xs font-mono">Gün</span>
        </div>
        <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-base sm:text-2xl">
            <span style={{ "--value": countdown.hours }}></span>
          </span>
          <span className="text-xs font-mono">Saat</span>
        </div>
        <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-base sm:text-2xl">
            <span style={{ "--value": countdown.minutes }}></span>
          </span>
          <span className="text-xs font-mono">Dakika</span>
        </div>
        <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-base sm:text-2xl">
            <span style={{ "--value": countdown.seconds }}></span>
          </span>
          <span className="text-xs font-mono">Saniye</span>
        </div>
      </div>
        </>
    )
}
