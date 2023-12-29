import { IoMdHome } from "react-icons/io";
import { TiUser } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiFunctionFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
const Navbar = () => {
  return (
  <>
    <div className=" flex flex-col justify-center h-max bottom-0 z-50 md:right-[2%] w-full md:w-12 md:h-screen items-center fixed ">
    <div className=" flex w-full items-center md:flex-col h-[80px] md:h-max md:rounded-full justify-between md:justify-center gap-10 px-4 xl:px-0 py-8 bg-red-200/10  backdrop-blur-sm text-3xl xl:text-xl">
      <div className=" hover:text-red-600">
        <Link to={"/"}>
        <IoMdHome />
        </Link>
      </div>

      <div className=" hover:text-red-600">
        <Link to={"/about"}> 
        <TiUser />
        </Link>
      </div>

      <div className=" hover:text-red-600">
        <Link to={"/projects"}>
        <RiFunctionFill />
        </Link>
      </div>
      
      <div className=" hover:text-red-600">
        <Link to={"/contact"}>
        <FaEnvelope />
        </Link>
      </div>

      <div className=" hover:text-red-600">
        <Link to={"/services"}>
        <MdMiscellaneousServices />
        </Link>
      </div>
    </div>
    </div>
  </>
  )
}

export default Navbar