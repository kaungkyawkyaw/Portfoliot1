import Abouttwo from "../components/Abouttwo";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className=" h-screen py-32 xl:overflow-hidden  text-center bg-violet-950 xl:text-left xl:px-40">
      <div className="flex flex-col h-full xl:justify-center">
        <div className="flex flex-col gap-y-5 xl:flex-row gap-x-10 bg-violet-950">
          <motion.div
            initial={{ translateX: "-500" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 2 }}
            className=" flex flex-col justify-center items-center"
          >
            <h1 className=" text-2xl font-bold">
              About <span className=" text-red-600">me</span>
            </h1>
            <p className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              {" "}
              I'm Kaung Kyaw. I have two years of experience as a manual
              software tester, where I developed a strong eye for detail and
              quality. Recently, I have transitioned into web
              development/design, where I have gained proficiency in HTML, CSS,
              JavaScript, Reactjs and responsive design. I am passionate about
              creating user-friendly web applications and am eager to bring my
              problem-solving skills and attention to detail to a junior web
              developer/designer role.{" "}
            </p>
          </motion.div>
          <motion.div
            initial={{ translateX: "500" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 2 }}
            className=" flex justify-center  mb-20 xl:max-w-[45%] xl:mt-20 h-[550px] xl:h-[420px] bg-violet-950"
          >
            <Abouttwo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
