import { Link } from "react-router-dom";
import LogoCodeJourney from "/src/assets/CodeJourney.png";
import { IoSearchOutline } from "react-icons/io5";
import { RiFileEditLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [searchBoxVisibility, setSearchVisibility] = useState<boolean>(false);

  return (
    <nav className="h-[70px] border-b-[2px] flex items-center relative">
      <div className="container px-2 h-full mx-auto flex items-center justify-between">
        <Link to={"/"} className="w-[50px] h-[50px]">
          <img
            src={LogoCodeJourney}
            alt="Logo CodeJourney"
            className="w-[90px] scale-[1.6]"
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center bg-gray-100 gap-2 border-[2px] rounded-full px-2 h-10 pl-4">
            <input
              type="text"
              className="border-none outline-none placeholder:text-sm font-light bg-transparent"
              placeholder="Search..."
            />
            <div className="w-6 flex items-center justify-center cursor-pointer">
              <IoSearchOutline size={"20px"} className="text-gray-700" />
            </div>
          </div>
          <div
            className="bg-gray-200 md:hidden cursor-pointer h-9 w-9 rounded-full flex items-center justify-center"
            onClick={() => setSearchVisibility(!searchBoxVisibility)}
          >
            <IoSearchOutline size={"18px"} className="text-gray-600" />
          </div>

          <Link
            to={"/editor"}
            className="h-9 md:flex hidden text-gray-400 hover:text-gray-600 items-center transition-all gap-2 hover:bg-gray-200 px-2 rounded-md"
          >
            <RiFileEditLine />
            <p className="text-sm font-medium">Write</p>
          </Link>

          <Link
            to={"/signin"}
            className="font-medium text-white bg-gray-900 h-9 flex items-center px-4 rounded-full text-sm"
          >
            Sign In
          </Link>

          <Link
            to={"/signup"}
            className="font-medium text-white bg-gray-900 h-9 hidden md:flex items-center px-4 rounded-full text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div
        className={
          "md:hidden w-screen top-[70px] absolute border-b-[2px] mx-auto h-[70px] flex items-center " +
          (searchBoxVisibility
            ? "opacity-0 invisible pointer-events-none"
            : "opacity-100 pointer-events-auto")
        }
      >
        <div className="container mx-auto px-2 transition-all">
          <div className="flex items-center bg-gray-100 gap-2 border-[2px] rounded-full px-2 h-10 pl-4 w-full">
            <input
              type="text"
              className="flex-1 border-none outline-none placeholder:text-sm font-light bg-transparent"
              placeholder="Search..."
            />
            <div className="w-6 flex items-center justify-center cursor-pointer">
              <IoSearchOutline size={"20px"} className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
