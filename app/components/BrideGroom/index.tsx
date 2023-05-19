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

export function BrideGroom() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="flex flex-col items-center w-full pt-10 select-none px-7 lg:px-28 lg:pb-28"
        >
          <div className="flex flex-col w-full gap-2 text-center md:w-2/3">
            <div className="">
              <Image
                src="/assets/sectionimg.svg"
                alt="notes-img"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <h4 className={`${mrDehaviland.className} text-5xl md:text-6xl`}>
              Bride & Groom
            </h4>
            <div className="">
              <h5
                className={`${gabriela.className} text-lg font-semibold mb-2`}
              >
                Lorem ipsum dolor sit?
              </h5>
              <p className="text-sm font-light lg:px-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                laborum voluptatum animi rerum alias nulla architecto unde
                asperiores accusamus doloremque?
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 py-20 md:grid-cols-2 md:px-10 lg:px-20">
            <div className="flex flex-col items-center justify-center gap-5 px-5">
              <div className="">
                <Image
                  src="/assets/groom1.png"
                  alt="notes-img"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className={`${mrDehaviland.className} text-5xl mb-2`}>
                  Levi
                </h4>
                <h5 className={`${gabriela.className} text-lg font-semibold`}>
                  Levi Ackerman
                </h5>
                <h5 className={`${gabriela.className} text-sm mt-2`}>
                  Lorem ipsum - Dolor sit amet
                </h5>
                <h5 className={`${gabriela.className} text-sm mt-1`}>
                  📍 Jakarta, Indonesia.
                </h5>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 px-5">
              <div className="rounded-full shadow-lg">
                <Image
                  src="/assets/groom1.png"
                  alt="notes-img"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className={`${mrDehaviland.className} text-5xl mb-2`}>
                  Mikasa
                </h4>
                <h5 className={`${gabriela.className} text-lg font-semibold`}>
                  Mikasa Ackerman
                </h5>
                <h5 className={`${gabriela.className} text-sm mt-2`}>
                  Lorem ipsum - Dolor sit amet
                </h5>
                <h5 className={`${gabriela.className} text-sm mt-1`}>
                  📍 Bandung, Indonesia.
                </h5>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default BrideGroom;
