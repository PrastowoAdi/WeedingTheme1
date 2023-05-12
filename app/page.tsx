"use client";
import {
  Navbar,
  Hero,
  AboutMe,
  Portfolio,
  ContactMe,
  Footer,
} from "./components";
import useGetList from "./hooks/useGetList";

export default function Home() {
  const useGetListLanding = useGetList();
  const { data, isLoading } = useGetListLanding;

  return (
    <main className="min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center overflow-y-hidden min-h-screen">
          <div className="flex items-center gap-3">
            <svg
              className="animate-spin h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#f97316"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#f97316"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <h1 className="text-2xl font-bold">
              <span className="text-amber-400">MY</span>PORTFOLIO
            </h1>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero heroDesc={data?.data[0].heroDesc} />
          <AboutMe aboutMe={data?.data[0].aboutMe} />
          <Portfolio />
          <ContactMe />
          <Footer />
        </>
      )}
    </main>
  );
}
