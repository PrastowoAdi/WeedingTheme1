import { PortfolioListType, TechUseType } from "@/app/types";
import Image from "next/image";
import React, { useMemo } from "react";

const data = {
  result: [
    {
      title: "Lorem ipsum dolor sit.",
      img: "assets/aboutme.svg",
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis quo animi dignissimos consequuntur vero alias, maiores autem hic dolores, porro odio. Quidem, reprehenderit.",
      tech_use: [
        {
          name: "React",
        },
        {
          name: "MaterialUI",
        },
        {
          name: "Firebase",
        },
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "MongoDB",
        },
      ],
      link_code: "https://github.com/PrastowoAdi/NewMyPortfolio",
      link_live_demo: "https://github.com/PrastowoAdi/NewMyPortfolio",
    },
    {
      title: "Lorem ipsum dolor sit.",
      img: "assets/aboutme.svg",
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis quo animi dignissimos consequuntur vero alias, maiores autem hic dolores, porro odio. Quidem, reprehenderit.",
      tech_use: [
        {
          name: "React",
        },
        {
          name: "TailwindCSS",
        },

        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "MongoDB",
        },
      ],
      link_code: "https://github.com/PrastowoAdi/NewMyPortfolio",
      link_live_demo: "",
    },
  ],
};

export function Portfolio() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="project"
          className="flex flex-col w-full pt-10 select-none px-10 lg:px-28 lg:py-28"
        >
          <div className="pb-10">
            <h6 className="font-bold text-sm text-amber-400">Portfolio</h6>
            <h2 className="text-2xl font-bold">
              Each project is a unique piece of development
            </h2>
          </div>
          <>
            {data.result.map((item: PortfolioListType, idx: number) => (
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center w-full py-10 px-3 gap-2 mb-5 lg:mb-20`}
                key={idx}
              >
                <div
                  className={`flex justify-center ${
                    idx % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  } w-full p-5`}
                >
                  <Image
                    src={`/${item.img}`}
                    alt="aboutme-img"
                    width={250}
                    height={250}
                    className="rounded-lg shadow-lg w-full sm:w-1/2 lg:w-3/4"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full text-center justify-center items-center">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-slate-600 w-full lg:w-3/4 mx-auto">
                    {item.short_desc}
                  </p>
                  <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600 font-semibold mt-10">
                    {item.tech_use.map((itemTech: TechUseType, idx: number) => (
                      <p key={idx}>{itemTech.name}</p>
                    ))}
                  </div>

                  <div className="flex mt-10 gap-5">
                    <div className="flex gap-3 p-2 shadow-md rounded-md">
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1.5em"
                          width="1.5em"
                        >
                          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                        </svg>
                      </div>
                      <p className="">Code</p>
                    </div>
                    <div className="flex gap-3 p-2 shadow-md rounded-md">
                      <div className="">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1.5em"
                          width="1.5em"
                        >
                          <path d="M19 6.41L8.7 16.71a1 1 0 11-1.4-1.42L17.58 5H14a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0V6.41zM17 14a1 1 0 012 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2h5a1 1 0 010 2H5v12h12v-5z" />
                        </svg>
                      </div>
                      <p className="">Live Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        </section>
      </>
    );
  }, [data]);

  return renderMain;
}

export default Portfolio;
