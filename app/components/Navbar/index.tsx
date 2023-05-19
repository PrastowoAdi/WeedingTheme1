import React, { useMemo, useState } from "react";
import MenuItem from "./MenuItem";

export function Navbar() {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<any>("#home");

  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="hidden justify-between items-center w-full h-10 px-8 py-10 pt-8 lg:px-16 lg:py-10 fixed bg-white/50 backdrop-blur-sm top-0">
          <div className="">
            <h1 className="text-2xl font-black text-amber-400 border-b-2 border-amber-200">
              <a href="#home" onClick={() => setActiveName("#home")}>
                Wendi&Aris
              </a>
            </h1>
          </div>
          <div className="hidden lg:flex gap-7">
            <MenuItem
              title="Home"
              active={`${activeName === "#home" ? "active" : ""}`}
              href="#home"
              setActiveName={(val: string) => setActiveName(val)}
            />
            <MenuItem
              title="About"
              active={`${activeName === "#aboutme" ? "active" : ""}`}
              href="#aboutme"
              setActiveName={(val: string) => setActiveName(val)}
            />
            <MenuItem
              title="Project"
              active={`${activeName === "#project" ? "active" : ""}`}
              href="#project"
              setActiveName={(val: string) => setActiveName(val)}
            />
            <MenuItem
              title="Contact"
              active={`${activeName === "#contactme" ? "active" : ""}`}
              href="#contactme"
              setActiveName={(val: string) => setActiveName(val)}
            />
          </div>
        </nav>
      </>
    );
  }, [navMobile, activeName]);

  return renderMain;
}

export default Navbar;
