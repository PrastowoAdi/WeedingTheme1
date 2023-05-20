import React, { useCallback, useMemo, useState } from "react";

import { Mr_De_Haviland, Gabriela } from "next/font/google";
import Image from "next/image";
import Modal from "./Modal";

const mrDehaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

export function OurLoveStory() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleOpenModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="ourlovestory"
          className="flex flex-col items-center w-full pt-20 select-none px-7 lg:px-28"
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
              Our Love Story
            </h4>
            <p className="text-sm font-light lg:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              laborum voluptatum animi rerum alias nulla architecto unde
              asperiores accusamus doloremque?
            </p>
          </div>

          <div className="relative pt-16 overflow-auto pb-28">
            <div className="max-w-xs min-w-0 mx-auto md:max-w-3xl lg:max-w-5xl">
              <div className="flex gap-2 overflow-x-auto">
                {Array(5)
                  .fill(undefined)
                  .map((i: any, idx: number) => (
                    <div
                      className="flex-none w-full px-3 py-6 border-b-2 md:border-b-0 md:w-5/6 rounded-b-3xl"
                      key={idx}
                    >
                      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                        <div className="">
                          <Image
                            src="/assets/weedinghero.jpg"
                            alt="notes-img"
                            width={750}
                            height={750}
                            className="w-full rounded-t-3xl"
                          />
                        </div>
                        <div className="px-2">
                          <h5 className="">First Meet</h5>
                          <h5 className="mb-3 text-sm">2019</h5>
                          <p className="text-sm font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga nihil neque illum natus, quaerat quam
                            reiciendis, sunt doloribus, temporibus ratione ex
                            maiores velit facere excepturi.{" "}
                            <span
                              className="font-semibold text-blue-500 transition duration-150 ease-in-out cursor-pointer hover:text-blue-400"
                              onClick={toggleOpenModal}
                            >
                              Read More
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <Modal modalOpen={openModal} modalClose={toggleOpenModal} />
        </section>
      </>
    );
  }, [toggleOpenModal, openModal]);

  return renderMain;
}

export default OurLoveStory;
