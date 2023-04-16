import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="text-white">
      <div className="flex items-center justify-between w-full px-14 md:h-[12vh] h-[10vh] bg-[#574dc1] border-gray-200 shadow-md">
        <div>
          <a
            className="flex items-center hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="self-center text-[2rem] font whitespace-nowrap hover:rotate-[-1deg] ">
              PsicoDaily
            </span>
          </a>
        </div>
        <ul className="md:flex text-[1.4rem] space-x-8  hidden">
          <li
            onClick={() => router.push("/login")}
            className="hover:cursor-pointer hover:rotate-[-2deg] "
          >
            <a className="block rounded hover:text-gray-300">Login</a>
          </li>
          <li
            onClick={() => router.push("/register")}
            className="hover:cursor-pointer hover:rotate-[-2deg]"
          >
            <a className="block rounded hover:text-gray-300">Registrar</a>
          </li>
          <li className="hover:cursor-pointer hover:rotate-[-2deg]">
            <a href="#sobre" className="block rounded hover:text-gray-300">
              Sobre
            </a>
          </li>
        </ul>{" "}
        {!mobileNav && (
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="block md:hidden ml-100"
          >
            <div>
              {" "}
              <AiOutlineMenu
                size={20}
                className="hover:cursor-pointer"
              ></AiOutlineMenu>
            </div>
          </div>
        )}
      </div>

      {mobileNav && (
        <div
          className={
            mobileNav
              ? "fixed left-0 top-0 w-[60%] h-full  bg-[#574dc1] ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex items-center justify-center p-4">
            <h1 className="w-full text-3xl font-bold text-white">PsicoDaily</h1>
            <MdOutlineClose
              className="text-2xl hover:cursor-pointer"
              onClick={() => setMobileNav(!mobileNav)}
            ></MdOutlineClose>
          </div>

          <ul className="flex flex-col gap-8 text-xl mt-5 items-start justify-center ">
            <li
              className={`p-4   hover:bg-[#5850ad] cursor-pointer transition-all duration-200 ease-in-out w-full`}
            >
              <a onClick={() => router.push("/login")}>Login</a>
            </li>
            <li className="p-4 hover:bg-[#5850ad] cursor-pointer transition-all duration-200 ease-in-out w-full">
              <a onClick={() => router.push("/register")}>Registrar</a>
            </li>
            <li className="p-4   hover:bg-[#5850ad] cursor-pointer transition-all duration-200 ease-in-out w-full">
              <a href="#about">Sobre</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
