import Abouttwo from "../components/Abouttwo"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className=" h-screen py-32 text-center xl:text-left xl:px-40">
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <motion.div initial={{ translateX: "-500" }}
  animate={{ translateX: "0" }} transition={{ duration: 2 }} className=" flex-1 flex flex-col justify-center">
          <h1 className=" text-2xl font-bold">About <span className=" text-red-600">me</span></h1>
          <p className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">3 year ago,I first learned from Youtube.And then,lerned at MMSIT </p>
        </motion.div>
        <motion.div initial={{ translateX: '500' }}
  animate={{ translateX: "0" }} transition={{ duration: 2 }} className=" flex flex-col  w-full xl:max-w-[48%] h-[480px]">
          <Abouttwo/>
        </motion.div>
      </div>
    </div>
  )
}

export default About