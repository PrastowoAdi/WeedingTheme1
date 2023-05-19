"use client";
import { useState } from "react";
import {
  Navbar,
  Hero,
  Notes,
  BrideGroom,
  CountdownDay,
  OurLoveStory,
  OurMoment,
  ShareLove,
  GuestBook,
  Footer,
  WelcomeInvitation,
} from "./components";

export default function Home() {
  const [welcomeInvitation, setWelcomeInvitation] = useState<boolean>(true);
  return (
    <main className="min-h-screen">
      {welcomeInvitation ? (
        <WelcomeInvitation
          toggleWelcomeInvitation={() =>
            setWelcomeInvitation(!welcomeInvitation)
          }
        />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Notes />
          <BrideGroom />
          <CountdownDay />
          <OurLoveStory />
          <OurMoment />
          <ShareLove />
          <GuestBook />
          <Footer />
        </>
      )}
    </main>
  );
}
