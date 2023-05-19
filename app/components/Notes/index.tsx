import React, { useMemo } from "react";

import { Mr_De_Haviland, Gabriela } from "next/font/google";
import Image from "next/image";

const mrDehaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function Notes() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="flex flex-col items-center w-full pt-20 select-none px-7 lg:px-28 lg:pt-28"
        >
          <div className="flex flex-col w-full gap-2 text-center md:w-2/3">
            <h4 className={`${mrDehaviland.className} text-5xl md:text-6xl`}>
              Notes
            </h4>
            <div className="">
              <h5
                className={`${gabriela.className} text-lg font-semibold mb-2`}
              >
                Lorem ipsum dolor sit?
              </h5>
              <p className="text-sm font-light lg:px-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                tempore nemo cumque laboriosam, eaque quo!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 py-16 md:grid-cols-2 md:px-20">
            {Array(4)
              .fill(undefined)
              .map((e: any, idx: number) => (
                <div
                  className="flex flex-col items-center justify-center gap-5 md:text-center"
                  key={idx}
                >
                  <div className="hidden md:block">
                    <Image
                      src="/assets/washing-hand.png"
                      alt="notes-img"
                      width={100}
                      height={100}
                      className="w-1/2 mx-auto rounded-md shadow-lg"
                    />
                  </div>
                  <div className="md:px-3 lg:px-10 md:pb-10">
                    <h5 className="mb-2 text-sm font-semibold tracking-wide">
                      Lorem ipsum dolor sit?
                    </h5>
                    <p className="text-sm font-light">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae perspiciatis eligendi enim obcaecati alias, nam
                      optio ratione distinctio repellat dignissimos.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default Notes;
