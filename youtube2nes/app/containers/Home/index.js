"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import download from "../../api/download";

export default function HomeContainer() {
  const [countdown, setCountdown] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const endDate = new Date("2023-10-15").getTime();
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

    // Url değiştiğinde state'i güncelle
    const handleChange = (e) => {
      setUrl(e.target.value);
    };
  
    // İndir butonuna tıklandığında endpoint'e istek gönder ve videoyu indir
    const handleClick = async () => {
      try {
        const response = await axios.get(`/api/download?url=${url}`, {
          responseType: "blob",
        });
        fileDownload(response.data, `${url}.mp4`);
      } catch (error) {
        console.error(error);
      }
    };

  return (
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
      {/* Page Content */}
      <div>
        <div className="h-screen grid grid-flow-row-dense grid-rows-6 sm:grid-rows-2 grid-cols-4 gap-6 md:gap-12 md:mx-1 mx-6 py-8">
          <div className="col-span-4 row-span-2 sm:row-span-1 md:col-start-2 md:col-span-2 bg-base-300 indicator rounded-3xl w-full">
            <span className="indicator-item badge badge-lg bg-lime-400 text-black border-lime-400 mr-4 sm:mr-0">
              new
            </span>
            <div className="grid w-full items-center">
              <div className="form-control w-full items-center justify-center">
                <label className="label">
                  <span className="label-text mb-2 flex items-center text-xl sm:text-4xl">
                    Enter your link{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 sm:w-12 sm:h-12 ml-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>
                </label>
                <label className="input-group w-full px-4 lg:px-8 xl:px-12">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={url} 
                      onChange={handleChange}
                      placeholder="https://www.youtube.com/watch?v=d89sViH2S_c&t=13s"
                      className="input input-bordered w-full pr-16 text-xs text-base-content"
                    />
                    <button onClick={handleClick} className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-primary row-span-6 sm:row-span-1 col-span-full lg:col-span-1 md:row-span-2 rounded-3xl flex justify-center items-center">
          <h1 className="text-9xl">2</h1>
          </div>
          <div className="bg-primary hidden row-span-1 col-span-full lg:col-span-1 md:row-span-2 rounded-3xl lg:flex justify-center items-center">
            <h1 className="text-9xl">3</h1>
          </div>
          <div className="bg-primary   hidden rounded-3xl md:flex justify-center items-center">
            <h1 className="text-9xl">4</h1>
          </div>
          <div className="bg-primary   hidden rounded-3xl md:flex justify-center items-center">
            <h1 className="text-9xl">5</h1>
          </div>
        </div>
      </div>
    </>
  );
}
