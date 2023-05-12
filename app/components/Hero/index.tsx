import Image from "next/image";
import React, { useMemo } from "react";

interface IProps {
  heroDesc: string | undefined;
}
export function Hero(props: IProps) {
  const { heroDesc } = props;
  const renderMain = useMemo(() => {
    return (
      <>
        <header
          id="home"
          className="flex flex-col sm:flex-row-reverse sm:justify-between w-full pt-24 select-none items-center px-5 lg:px-28 lg:py-36"
        >
          <div className="flex justify-center w-full p-5">
            <Image
              src="/assets/profile-img.png"
              alt="profile-img"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full lg:w-2/3"
              priority
            />
          </div>
          <div className="flex flex-col w-full py-10 px-3 gap-5">
            <h1 className="font-bold text-2xl">Front-End Developer 👋</h1>
            <p className="text-slate-600">{heroDesc}</p>
            <div className="flex items-center gap-3">
              <a
                className="text-blue-600 hover:text-blue-500 cursor-pointer transition duration-150 ease-in-out"
                href="https://www.linkedin.com/in/prastowo-adi-nugroho-0657b31b0/"
                target="_blank"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                  className=""
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              <a
                className="cursor-pointer hover:text-gray-600 transition duration-150 ease-in-out"
                href="https://github.com/PrastowoAdi"
                target="_blank"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col mt-10 gap-3 lg:flex-row lg:items-center">
              <h2 className="font-semibold">Tech Stack</h2>
              <p className="hidden lg:block font-semibold">|</p>
              <div className="flex items-center gap-5 overflow-y-auto scrollbar-none">
                <a
                  className="text-cyan-400 hover:text-cyan-600 cursor-pointer transition duration-150 ease-in-out"
                  href="https://react.dev/"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                  </svg>
                </a>
                <a
                  className="hover:text-gray-600 cursor-pointer transition duration-150 ease-in-out"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 15V9l7.745 10.65A9 9 0 1119 17.657M15 12V9" />
                  </svg>
                </a>
                <a
                  className="text-purple-400 hover:text-purple-600 cursor-pointer transition duration-150 ease-in-out"
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M16.54 7c-.805-2.365-2.536-4-4.54-4-2.774 0-5.023 2.632-5.023 6.496 0 1.956 1.582 4.727 2.512 5.996" />
                    <path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9 1.703-.979 2.875-3.362 3.516-4.798" />
                    <path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1 1.387-2.39-.215-5.893-3.579-7.824-1.702-.979-4.357-1.235-5.927-1.07" />
                    <path
                      fill="currentColor"
                      d="M10.493 9.862c.48.276 1.095.112 1.372-.366a.997.997 0 00-.367-1.365 1.007 1.007 0 00-1.373.366.997.997 0 00.368 1.365z"
                    />
                    <path
                      fill="currentColor"
                      d="M10.494 15.492 A1.005 1 0 0 1 9.489 16.492 A1.005 1 0 0 1 8.484000000000002 15.492 A1.005 1 0 0 1 10.494 15.492 z"
                    />
                    <path
                      fill="currentColor"
                      d="M16.521 13.993 A1.005 1 0 0 1 15.516 14.993 A1.005 1 0 0 1 14.511 13.993 A1.005 1 0 0 1 16.521 13.993 z"
                    />
                  </svg>
                </a>
                <a
                  className="text-orange-500 hover:text-orange-600 cursor-pointer transition duration-150 ease-in-out"
                  href="https://id.wikipedia.org/wiki/HTML"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                  </svg>
                </a>
                <a
                  className="text-blue-700 hover:text-blue-500 cursor-pointer transition duration-150 ease-in-out"
                  href="https://en.wikipedia.org/wiki/CSS"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                    />
                  </svg>
                </a>
                <a
                  className="text-blue-700 hover:text-blue-400 cursor-pointer transition duration-150 ease-in-out"
                  href="https://mui.com/"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M8 16.61v-1.24l6-3.46V7.23l-5 2.89-5-2.89V13l-1 .58L2 13V5l1.07-.62L9 7.81l3.93-2.27 2-1.16L16 5v8.06L10.92 16l4.05 2.33 5.03-2.9V11l1-.58 1 .58v5.58l-7.03 4.06L8 16.61m14-6.86l-1 .58-1-.58V8.58L21 8l1 .58v1.17z" />
                  </svg>
                </a>
                <a
                  className="text-cyan-300 hover:text-cyan-500 cursor-pointer transition duration-150 ease-in-out"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }, [heroDesc]);

  return renderMain;
}

export default Hero;
