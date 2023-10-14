"use client";
import Link from "next/link";
import React, { useState , useEffect } from "react";
import ThemeSwitcher from "@/app/themeSwitcher";

export default function Header() {
  const [title, setTitle] = useState("Beta");
  const [hovered, setHovered] = useState(false); // Link üzerine gelip gelmediğini takip eden bir state

  useEffect(() => {
    let intervalId;

    if (hovered) {
      const alternateTitles = ["Musa", "Saat", "5", "Oldu !"];
      let currentIndex = 0;

      // Başlığı belirli aralıklarla değiştir
      intervalId = setInterval(() => {
        setTitle(alternateTitles[currentIndex]);
        currentIndex = (currentIndex + 1) % alternateTitles.length;
      }, 400);
    } else {
      // Link üzerinden çıkıldığında başlığı tekrar orijinal haline getir
      setTitle("Beta");
    }

    // Component unmount edildiğinde interval'i temizle
    return () => clearInterval(intervalId);
  }, [hovered]);

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
              <div className="drawer z-50">
                <input
                  id="sidemenu"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="sidemenu"
                    className="btn btn-primary drawer-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="sidemenu" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                      <a>Sidebar Item 1</a>
                    </li>
                    <li>
                      <a>Sidebar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="navbar-center">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary mt-2 badge-sm">
                  {title}
                </span>
                <Link
                  onMouseEnter={() => setHovered(true)} // Link üzerine gelindiğinde hovered'ı true yap
                  onMouseLeave={() => setHovered(false)} // Link üzerinden çıkıldığında hovered'ı false yap
                  href="/"
                  className="btn btn-ghost normal-case text-xl"
                >
                  Youtube2nes
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <button
                className="btn btn-ghost btn-circle w-12 md:w-24 gap-0 mr-0 md:mr-4"
                onClick={() =>
                  document.getElementById("search_url").showModal()
                }
              >
                <kbd className="kbd kbd-xs hidden md:block">
                  {/* {
                    // Mac'te ⌘, Windows'ta Ctrl
                    window.navigator.platform === "Win32" ? "Ctrl" : "⌘"
                  } */}
                  ⌘
                </kbd>
                <kbd className="kbd kbd-xs hidden md:block">k</kbd>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <ThemeSwitcher />
              <dialog id="search_url" className="modal">
                <div className="modal-box pb-14">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text mb-2 flex items-center">
                        Enter your link{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </span>
                    </label>
                    <label className="input-group">
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder="https://www.youtube.com/watch?v=d89sViH2S_c&t=13s"
                          className="input input-bordered w-full pr-16 text-xs"
                        />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
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
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
