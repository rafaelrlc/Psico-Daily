import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

import { NavHelper, MobileNavHelper } from "./navbarVariations";

const Navbar = ({ type }) => {
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="text-white">
      <div className="flex items-center justify-between w-full px-14 sm:h-[11vh] h-[8vh] bg-[#574dc1] border-gray-200 custom-shadow">
        <div>
          <a
            className="flex items-center justify-center mt-1 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            {!mobileNav && (
              <span className="self-center md:text-[1.7rem] text-[1.45rem] font-bold whitespace-nowrap hover:rotate-[-1deg] ">
                PsicoDaily
              </span>
            )}
          </a>
        </div>

        <ul className={`lg:flex ${"text-[0.9rem]"} hidden`}>
          <NavHelper type={type} />
        </ul>

        {!mobileNav && (
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="block lg:hidden ml-100"
          >
            <div>
              {" "}
              <AiOutlineMenu className="hover:cursor-pointer text-2xl"></AiOutlineMenu>
            </div>
          </div>
        )}
      </div>

      <div
        className={
          mobileNav
            ? "fixed flex flex-col items-center justify-center left-0 top-0 w-full h-full lg:hidden bg-[#574dc1] opacity-[.98] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="absolute top-4 right-4">
          <MdOutlineClose
            className="text-3xl hover:cursor-pointer"
            onClick={() => setMobileNav(!mobileNav)}
          />
        </div>
        <ul className="text-center text-2xl  items-start justify-center font-bold">
          <MobileNavHelper type={type} setMobileNav={setMobileNav} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
