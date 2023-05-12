import Image from "next/image";
import React, { useMemo } from "react";

interface IProps {
  aboutMe: string | undefined;
}
export function AboutMe(props: IProps) {
  const { aboutMe } = props;
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="aboutme"
          className="flex flex-col sm:flex-row-reverse sm:justify-between w-full pt-10 px-5 select-none items-center lg:px-28 lg:py-28"
        >
          <div className="flex flex-col w-full py-10 px-3 gap-2">
            <h6 className="font-bold text-sm text-amber-400">About Me</h6>
            <h2 className="text-2xl font-bold">
              A dedicated Front-end Developer based in Jakarta, Indonesia 📍
            </h2>
            <p className="text-slate-600">{aboutMe}</p>
          </div>
          <div className="flex justify-center w-full p-5">
            <Image
              src="/assets/aboutme.svg"
              alt="aboutme-img"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full lg:w-2/3"
            />
          </div>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default AboutMe;
