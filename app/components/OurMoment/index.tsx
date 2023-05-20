import React, { useMemo } from "react";

import { Mr_De_Haviland, Gabriela } from "next/font/google";

import LightGallery from "lightgallery/react";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import ImageItem from "./ImageItem";

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
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid w-full grid-cols-3 gap-3 py-10 md:w-4/5 lg:w-3/4 md:px-10 lg:px-16"
          >
            <ImageItem src="/assets/img3.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img8.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img4.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img7.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img2.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img9.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img5.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img10.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img6new.png" alt="Our Moment" />
          </LightGallery>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default OurMoment;
