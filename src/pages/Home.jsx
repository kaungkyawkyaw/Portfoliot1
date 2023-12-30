import { Link } from "react-router-dom"
import Tsparticles from "../components/Tsparticles"
import Image from "../images/desktop-wallpaper-pink-and-purple-texture-abstract.jpg"
import stickerimg from "../images/sticker.webp"
import {motion} from "framer-motion"
const Home = () => {
  return (
    <>
    <div className=" h-screen overflow-hidden xl:px-40">
      <div className=" w-full h-full">
      <motion.div initial={{ translateX: '-500' }}
  animate={{ translateX: "0" }} transition={{ duration: 2 }}  className=" text-center xl:text-left flex  flex-col justify-center xl:pt-40 h-full container mx-auto">
        {/* text */}
       <div>
        {/* title */}
        <h1  className=" text-xl font-bold mb-5">Transforming Ideas <br /> Into <span className=" text-red-500">Digital Reality</span></h1>
        {/* subtitle */}
        <p className=" mx-auto max-w-sm xl:max-w-xl xl:mx-0 mb-10 xl:mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus, quis et voluptates saepe deserunt, sint quisquam maxime magnam mollitia officiis beatae corporis eum voluptatem error neque. Aliquam, voluptas maxime.</p>
        {/* btn */}
        <div className=" flex justify-center xl:hidden  relative">
        <Link to={"/projects"}>
        <button className=" py-2 px-3 rounded-lg border bg-red-200/10 backdrop-blur-lg ">My Projects</button>
        </Link>
        </div>
        <Link to={"/projects"}>
        <button className=" py-2 px-3 rounded-lg border  bg-red-200/10 backdrop-blur-lg  hidden xl:flex ">My Project</button>
        </Link>
       </div>
      </motion.div>
      </div>
      <div className=" right-0 bottom-0  ">
        {/* image */}
          <img className=" hidden w-full xl:flex absolute h-screen right-0 bottom-0  mix-blend-color-dodge " src={Image} alt="" />
      <Tsparticles/>
          {/* avatar */}
          {/* <div className="hidden absolute -bottom-32 left-[55%] xl:flex xl:max-w-none translate-z-0 w-full h-full ">
            <motion.img initial={{ translateY: '50' }}
  animate={{ translateY: "0" }} transition={{ duration: 2 }} src={stickerimg}  alt="" />
          </div> */}
        
      </div>
     
    </div>
    </>
  )
}

export default Home