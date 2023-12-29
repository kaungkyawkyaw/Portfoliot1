import { Link } from "react-router-dom"
import {FaGithub,FaFacebookMessenger,FaTelegram} from "react-icons/fa";
const Header = () => {
  return (
    <div className=" absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between xl:px-40 items-center gap-y-6 py-8">
        <Link to={"/"}>
          <h1 className=" text-3xl font-semibold">Kaung Kyaw Kyaw</h1>
        </Link>
        <div className=" flex items-center gap-x-5 text-lg">
          <Link href={''}>
            <FaFacebookMessenger />
          </Link>
          <Link href={''}>
              <FaGithub />
          </Link>
          <Link href={''}>
              <FaTelegram />
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header