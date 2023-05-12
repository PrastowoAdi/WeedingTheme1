import React, { useMemo } from "react";

export function ContactMe() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="contactme"
          className="flex flex-col w-full py-14 select-none px-10 lg:px-28 lg:py-28"
        >
          <div className="pb-10">
            <h6 className="font-bold text-sm text-amber-400">ContactMe</h6>
            <h2 className="text-2xl font-bold">Dont'be shy! Hit me up 👇</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-7">
            <div className="flex gap-3 md:justify-center items-center">
              <div className="px-5 text-amber-500">
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
                </svg>
              </div>
              <div className="flex-1 flex-col text-slate-600">
                <h5 className="font-semibold">Location</h5>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <div className="px-5 text-amber-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
                </svg>
              </div>
              <div className="flex-1 flex-col text-slate-600">
                <h5 className="font-semibold">Mail</h5>
                <p>prastowoadiwork@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default ContactMe;
