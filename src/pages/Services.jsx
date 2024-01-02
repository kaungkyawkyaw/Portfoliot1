import { Carousel } from "@mantine/carousel";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";

const Services = () => {
  return (
    <div className=" h-screen sm:overflow-hidden bg-violet-950 flex items-center xl:px-40">
      <div className=" container bg-violet-950 px-4 mx-auto">
        <div className=" flex flex-col mt-56 sm:mt-20 xl:flex-row gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left my-4 xl:mb-0 ">
            <motion.h1
              initial={{ translateY: "-20" }}
              animate={{ translateY: "0" }}
              transition={{ duration: 2 }}
              className=" text-3xl xl:mt-8 font-bold"
            >
              My Services <span className=" text-red-600">.</span>
            </motion.h1>
            <motion.div
              initial={{ translateY: "20" }}
              animate={{ translateY: "0" }}
              transition={{ duration: 3 }}
              className=" flex flex-col my-4 max-w-[400px] mx-auto lg:mx-0"
            >
              <div className=" flex  items-center gap-3">
                Customization <GoArrowRight className=" hidden xl:flex " />{" "}
              </div>
              <div className=" flex  items-center gap-3">
                Responsive Web Design{" "}
                <GoArrowRight className=" hidden xl:flex " />{" "}
              </div>
              <div className=" flex  items-center gap-3">
                Clean Code <GoArrowRight className=" hidden xl:flex " />{" "}
              </div>
              <div className=" flex  items-center gap-3">
                Maintenance <GoArrowRight className=" hidden xl:flex " />{" "}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ translateX: "400" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 2 }}
            className=" w-full h-[350px] xl:max-w-[65%]"
          >
            <div className="px-6 py-8 h-max hover:bg-[rgba(89,65,169,0.15)] rounded-lg bg-[rgba(65,47,123,0.15)]">
              <Carousel
                loop
                withControls={false}
                withIndicators
                height={200}
              >
                <Carousel.Slide>
                  <div>
                    <h1 className=" text-red-600 font-semibold text-xl mb-4">
                      Customization
                    </h1>
                    <p>
                      As a React Developer,I can create Customizing of web
                      desgins using CSS and other frontend development tools
                      that can be used well.
                    </p>
                  </div>
                </Carousel.Slide>

                <Carousel.Slide>
                  <div>
                    <h1 className=" mb-4 text-red-600 font-semibold text-xl">
                      Responsive Web Designs
                    </h1>
                    <p className="  leading-normal">
                      I can create responsive web designs. Any devices can be
                      written and created to stand out.
                    </p>
                  </div>
                </Carousel.Slide>

                <Carousel.Slide>
                  <div>
                    <h1 className=" mb-4 text-red-600 font-semibold text-xl">Clean Code</h1>
                    <p>
                      I can write code in a way that is easy for others
                      to understand.
                    </p>
                  </div>
                </Carousel.Slide>

                <Carousel.Slide>
                  <div>
                    <h1 className=" mb-4 text-red-600 font-semibold text-xl">Maintenance</h1>
                    <p></p>
                  </div>
                </Carousel.Slide>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
