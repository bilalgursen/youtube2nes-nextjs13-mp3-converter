import Image from "next/image";

export default function Link({ params }) {
  return (
    <>
      <div className="h-screen grid grid-flow-row-dense grid-rows-6 sm:grid-rows-2 grid-cols-4 gap-12 md:mx-1 mx-6 py-8">
          <div className="col-span-4 row-span-4 sm:row-span-1 md:col-start-2 md:col-span-2 bg-base-300 indicator rounded-3xl w-full">
            <span className="indicator-item badge badge-lg bg-lime-400 text-black border-lime-400 mr-4 sm:mr-0">
              new
            </span>
            <div className="grid w-full grid-cols-1 grid-rows-2 justify-items-center">
              <div className="form-control w-full items-center justify-center">
                <label className="label mt-14">
                  <span className="label-text mb-2 flex items-center text-xl sm:text-4xl">
                  {params.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 sm:w-12 sm:h-12 ml-2 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>
                </label>
                <label className="input-group w-full px-4 lg:px-8 xl:px-12">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="https://www.youtube.com/watch?v=d89sViH2S_c&t=13s"
                      className="input input-bordered w-full pr-16 text-xs text-base-content"
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </div>
                </label>
              </div>
              <div className="carousel carousel-end items-center rounded-box w-full">
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-hexagon h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-squircle h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-hexagon h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-squircle h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-hexagon h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-squircle h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="carousel-item sm:p-4">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                    alt="Picture of the author"
                    className="mask mask-hexagon h-32 w-32 sm:h-36 sm:w-36"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary row-span-6 sm:row-span-1 col-span-full lg:col-span-1 md:row-span-2 rounded-3xl flex justify-center items-center">
          <h1 className="text-9xl">2</h1>
          </div>
          <div className="bg-primary hidden sm:flex md:hidden row-span-1 col-span-full lg:col-span-1 md:row-span-2 rounded-3xl lg:flex justify-center items-center">
            <h1 className="text-9xl">3</h1>
          </div>
          <div className="bg-primary   hidden rounded-3xl md:flex justify-center items-center">
            <h1 className="text-9xl">4</h1>
          </div>
          <div className="bg-primary   hidden rounded-3xl md:flex justify-center items-center">
            <h1 className="text-9xl">5</h1>
          </div>
        </div>
    </>
    
  );
}
