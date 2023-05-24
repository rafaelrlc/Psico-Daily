import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { NavHelper, MobileNavHelper } from "./navbarVariations";

const Navbar = ({ type }) => {
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {}, []);

  return (
    <nav>
      <div className="flex items-center justify-between w-full px-14 sm:h-[80px] h-[65px] bg-[#4e44b5] border-gray-200 custom-shadow z-50 text-white">
        {showNotification && (
          <div
            id="toast-notification"
            class="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow  absolute right-[5vh] top-[10vh]"
            role="alert"
          >
            <div class="flex items-center mb-3">
              <span class="mb-1 text-sm font-semibold text-gray-900 ">
                New notification
              </span>
              <button
                onClick={() => {
                  setShowNotification(false);
                }}
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
              >
                <span class="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <div class="relative inline-block shrink-0">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
                  alt="Jese Leos image"
                />
                <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Message icon</span>
                </span>
              </div>
              <div class="ml-3 text-sm font-normal">
                <div class="text-sm font-semibold text-gray-900 ">
                  Bonnie Green
                </div>
                <div class="text-sm font-normal">commmented on your photo</div>
                <span class="text-xs font-medium text-blue-600 ">
                  a few seconds ago
                </span>
              </div>
            </div>
          </div>
        )}

        <div>
          <a
            className="flex items-center justify-center mt-1 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            {!mobileNav && (
              <span className="self-center md:text-[1.75rem] text-[1.45rem] font-bold whitespace-nowrap hover:rotate-[-1deg] ">
                PsicoDaily
              </span>
            )}
          </a>
        </div>

        <ul className="lg:flex text-[0.95rem] hidden">
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
        <ul className="text-center text-2xl  items-start justify-center font-bold">
          <MobileNavHelper type={type} setMobileNav={setMobileNav} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
