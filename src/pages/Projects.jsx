import { Carousel } from "@mantine/carousel";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div className=" h-screen flex items-center xl:overflow-hidden   xl:px-40">
        <div className=" container h-full mx-auto bg-violet-950">
        <div className=" flex flex-col xl:py-20 my-20 xl:flex-row bg-violet-950 gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left my-4 xl:mb-0 ">
            <motion.h1
              initial={{ translateY: "-20" }}
              animate={{ translateY: "0" }}
              transition={{ duration: 2 }}
              className=" text-3xl xl:mt-8 font-bold"
            >
              My Projects <span className=" text-red-600">.</span>
            </motion.h1>
            <motion.div
              initial={{ translateY: "20" }}
              animate={{ translateY: "0" }}
              transition={{ duration: 3 }}
              className=" flex flex-col my-4 max-w-[400px] mx-auto lg:mx-0"
            >
              This is my projects collection
            </motion.div>
          </div>
          <div className="w-full h-[350px] flex items-center mx-auto px-2  sm:max-w-[65%] ">
          <div className=" w-full px-5 py-8 h-max hover:bg-[rgba(89,65,169,0.15)] rounded-lg bg-[rgba(65,47,123,0.15)]">
          <Carousel dragFree  height={200} orientation="vertical" withControls={false} withIndicators>
            <Carousel.Slide>
              <a href="https://testtwo-bkifhorqs-kaungkyaws-projects.vercel.app/">Add-to-cart projects</a>
            </Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            <Carousel.Slide>4</Carousel.Slide>

          </Carousel>
          </div>
          </div>
        </div>
        </div>
        
    </div>
  );
};

export default Services;
{/* <div className=" container bg-violet-950 mx-auto">
  <div className=" flex flex-col my-20 xl:flex-row bg-violet-950 gap-x-8">
    <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left my-4 xl:mb-0 ">
      <motion.h1
        initial={{ translateY: "-20" }}
        animate={{ translateY: "0" }}
        transition={{ duration: 2 }}
        className=" text-3xl xl:mt-8 font-bold"
      >
        My Projects <span className=" text-red-600">.</span>
      </motion.h1>
      <motion.div
        initial={{ translateY: "20" }}
        animate={{ translateY: "0" }}
        transition={{ duration: 3 }}
        className=" flex flex-col my-4 max-w-[400px] mx-auto lg:mx-0"
      >
        This is my projects collection
      </motion.div>
    </div>
    <div className=" w-full xl:max-w-[65%] ">
    <div className="px-6 py-8 h-max hover:bg-[rgba(89,65,169,0.15)] rounded-lg bg-[rgba(65,47,123,0.15)]">
    <Carousel dragFree  height={200} orientation="vertical" withControls={false} withIndicators>
      <Carousel.Slide>
        <a href="https://testtwo-bkifhorqs-kaungkyaws-projects.vercel.app/">Add-to-cart projects</a>
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>

    </Carousel>
    </div>
    </div>
  </div>
</div> */}
