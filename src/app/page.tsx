import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="bg-white sticky top-0 shadow-md">
        <ul className="max-w-7xl mx-auto flex items-center p-4 gap-4 text-rose-900">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Projects</a>
          </li>
          <li>
            <a href="#!">Articles</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
        </ul>
      </nav>
      <header className="max-w-7xl mx-auto bg-white px-6 py-10 rounded-2xl grid grid-cols-12 place-content-center justify-center items-center place-items-center mt-16">
        <div className="col-span-5 col-start-2">
          <h1 className="block text-[54px] font-bold leading-[66px] text-rose-900">
            Developing Average Boring Website Interface
          </h1>
          <p className="leading-[30px] text-lg">
            Seriously building website interface with Tailwind CSS that have
            best performance and accessibility but kinda boring like average
            website out there.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-rose-800 text-white px-6 py-3 rounded-2xl mt-6"
            >
              Let&rsquo;s Talk!
            </button>
            <button
              type="button"
              className="bg-white text-rose-900 px-6 py-3 rounded-2xl mt-6 ring-inset ring-2 ring-rose-900"
            >
              View Resume
            </button>
          </div>
        </div>
        <div className="col-start-8 col-span-5">
          <img
            src="https://placekitten.com/250"
            alt=""
            className="rounded-full shadow-lg"
          />
        </div>
      </header>
      <header className="max-w-7xl mx-auto bg-white px-6 py-10 rounded-2xl grid grid-cols-12 place-content-center justify-center items-center place-items-center mt-16">
        <div className="col-span-5 col-start-2">
          <h1 className="block text-[54px] font-bold leading-[66px] text-rose-900">
            Developing Average Boring Website Interface
          </h1>
          <p className="leading-[30px] text-lg">
            Seriously building website interface with Tailwind CSS that have
            best performance and accessibility but kinda boring like average
            website out there.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-rose-800 text-white px-6 py-3 rounded-2xl mt-6"
            >
              Let&rsquo;s Talk!
            </button>
            <button
              type="button"
              className="bg-white text-rose-900 px-6 py-3 rounded-2xl mt-6 ring-inset ring-2 ring-rose-900"
            >
              View Resume
            </button>
          </div>
        </div>
        <div className="col-start-8 col-span-5">
          <img
            src="https://placekitten.com/250"
            alt=""
            className="rounded-full shadow-lg"
          />
        </div>
      </header>
    </>
  );
}
