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

export function OurMoment() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="flex flex-col items-center w-full pt-5 pb-20 select-none px-7 lg:px-28 lg:pb-28"
        >
          <div className="flex flex-col w-full gap-2 text-center md:w-2/3">
            {/* <div className="">
              <Image
                src="/assets/sectionimg.svg"
                alt="notes-img"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div> */}
            <h4 className={`${mrDehaviland.className} text-5xl md:text-6xl`}>
              Our Moment
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
          <div className="grid w-full grid-cols-3 gap-3 py-10 md:w-4/5 lg:w-3/4 md:px-10 lg:px-16">
            <div className="shadow-lg">
              <Image
                src="/assets/img3.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img8.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img4.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img7.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img2.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img9.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img5.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img10.jpg"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
            <div className="shadow-lg">
              <Image
                src="/assets/img6new.png"
                alt="notes-img"
                width={350}
                height={350}
                className="rounded-md"
              />
            </div>
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default OurMoment;
