import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { NavHelper, MobileNavHelper } from "./navbarVariations";
import useAuth from "@/hooks/useAuth";
import dynamic from "next/dynamic";
import Modal from "../../../utils/ModalTest";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { role } = useAuth();
  const router = useRouter();

  return (
    <nav>
      <div className="flex items-center justify-between w-full md:px-14 px-6 sm:h-[80px] h-[65px] bg-[#564cc1] border-gray-200 custom-shadow z-50 text-white">
        <div>
          <a
            className="flex items-center justify-center mt-1 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            {!mobileNav && (
              <div className="md:flex items-center">
                <img
                  src="https://media.discordapp.net/attachments/1025173249543393330/1111937606259851324/psicodaily-high-resolution-logo-color-on-transparent-background.png?width=2116&height=282"
                  className="h-5 md:block hidden"
                  alt="Logo"
                />
                <img
                  className="h-8 md:hidden block"
                  src="https://media.discordapp.net/attachments/1025173249543393330/1112577863565193337/p-high-resolution-logo-white-on-transparent-background.png?width=824&height=1060"
                />
                <span className="self-center md:text-[1.75rem] text-[1.45rem] font-bold whitespace-nowrap hover:rotate-[-1deg]"></span>
              </div>
            )}
          </a>
        </div>
        <ul className="lg:flex text-[0.95rem] hidden">
          <NavHelper type={role} />
        </ul>
        {!mobileNav && (
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="block lg:hidden ml-100"
          >
            <div>
              <AiOutlineMenu className="hover:cursor-pointer text-3xl" />
            </div>
          </div>
        )}
      </div>

      <div
        className={
          mobileNav
            ? "fixed flex flex-col items-center justify-center left-0 top-0 w-full h-full lg:hidden bg-[#574dc1] opacity-[.98] ease-in-out duration-500 z-50 text-white"
            : "fixed left-[-100%]"
        }
      >
        <div className="absolute top-4 right-4">
          <MdOutlineClose
            className="text-3xl hover:cursor-pointer"
            onClick={() => setMobileNav(!mobileNav)}
          />
        </div>
        <ul className="text-center text-2xl items-start justify-center font-bold">
          <MobileNavHelper type={role} setMobileNav={setMobileNav} />
        </ul>
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
