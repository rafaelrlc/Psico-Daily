import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { NavHelper, MobileNavHelper } from "./navbarVariations";
import InviteCard from "../InviteCard";
import useConfig from "../../../utils/functions/useConfig";
import { useAuth } from "@/context/auth/authProvider";
import api from "@/services/api";
const Navbar = ({ type }) => {
  const { accessToken } = useAuth();
  const router = useRouter();

  const config = useConfig(accessToken);

  const [mobileNav, setMobileNav] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const [showFriendRequests, setShowFriendRequests] = useState(true);

  const fetchNotifs = async () => {
    try {
      const response = await api.get("/notif", config);
      console.log(response);
      setFriendRequests(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNotifs();
  }, []);

  return (
    <nav>
      <div className="flex items-center justify-between w-full px-14 sm:h-[80px] h-[65px] bg-[#564cc1] border-gray-200 custom-shadow z-50 text-white">
        {showFriendRequests &&
          friendRequests.map((fr) => (
            <InviteCard
              nome={fr.name}
              notifId={fr._id}
              fetchNotifs={fetchNotifs}
              setShowFriendRequests={setShowFriendRequests}
            />
          ))}

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
