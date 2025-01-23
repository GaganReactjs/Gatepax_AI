import { useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { HiMiniTicket } from "react-icons/hi2";
import { RiFolderCheckFill } from "react-icons/ri";
import { BsFillTvFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { HiMenuAlt2 } from "react-icons/hi";
import DropDown from './ui-component/DropDown';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out fixed lg:static w-64 md:w-80 lg:w-96 h-screen border-r-6 border-gray-300 bg-white z-10 roboto-font`}
      >
        <button
          className="lg:hidden absolute -right-12 top-4 p-2 bg-white rounded-r-lg shadow-md"
          onClick={toggleSidebar}
        >
          <HiMenuAlt2 className="text-xl md:text-2xl" />
        </button>


        <div className="flex ml-4 md:ml-8 lg:ml-10 items-center w-full pt-6 md:pt-8 lg:pt-10">
          <img src="Logo.png" alt="Logo" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
          <h1 className="text-base md:text-lg font-semibold">Gatepax AI</h1>
        </div>
        <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 mt-10 md:mt-12 lg:mt-14 ml-4 md:ml-8 lg:ml-10">
          <Link to="/accounts" className="flex items-center gap-2 hover:text-[#006FB9]">
            <IoMdPerson className="text-2xl md:text-2xl lg:text-3xl" />
            <h1 className="text-base md:text-lg font-semibold">Accounts</h1>
          </Link>
          <Link to="/integrations" className="flex items-center gap-2 hover:text-[#006FB9]">
            <HiMiniTicket className="text-2xl md:text-2xl lg:text-3xl" />
            <h1 className="text-base md:text-lg font-semibold">Integrations</h1>
          </Link>
          <Link to="/knowledge" className="flex items-center gap-2 hover:text-[#006FB9] ">
            <RiFolderCheckFill className="text-2xl md:text-2xl lg:text-3xl" />
            <h1 className="text-base md:text-lg font-semibold">Knowledge configuration</h1>
          </Link>
          <Link to="/subscriptions" className="flex items-center gap-2 hover:text-[#006FB9]">
            <BsFillTvFill className="text-2xl md:text-2xl lg:text-3xl" />
            <h1 className="text-base md:text-lg font-semibold">Subscriptions</h1>
          </Link>
          <Link to="/performance" className="flex items-center gap-2 hover:text-[#006FB9]">
            <GoGraph className="text-2xl md:text-2xl lg:text-3xl" />
            <h1 className="text-base md:text-lg font-semibold">Performance monitoring</h1>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <DropDown />
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;