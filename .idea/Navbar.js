import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full px-14 h-24 bg-[#635acb] border-gray-200 text-white shadow-md">
      <div>
        <a
          className="flex items-center hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className="self-center text-[1.85rem] font-bold whitespace-nowrap hover:rotate-[-1deg]">
            PsicoDaily
          </span>
        </a>
      </div>

      <div>
        <ul className="flex  text-[1.4rem] mt-0 space-x-8 border-0 border-gray-100 ">
          <li
            onClick={() => router.push("/login")}
            className="hover:cursor-pointer hover:rotate-[-1deg] "
          >
            <a className="block rounded hover:text-gray-300">Login</a>
          </li>
          <li
            onClick={() => router.push("/register")}
            className="hover:cursor-pointer hover:rotate-[-1deg]"
          >
            <a className="block rounded hover:text-gray-300">Registrar</a>
          </li>
          <li className="hover:cursor-pointer hover:rotate-[-1deg]">
            <a href="#sobre" className="block rounded hover:text-gray-300">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
