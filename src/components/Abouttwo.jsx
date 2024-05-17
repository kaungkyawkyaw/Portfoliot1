import { Tabs } from '@mantine/core';
// import Frontdev from './Frontdev';
// import Backenddev from './Backenddev';
import { FaHtml5,FaCss3,FaReact,FaSass,FaNpm,FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { TbBrandGit,TbBrandTailwind } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
const Abouttwo = () => {
    
  return (
    <Tabs color="violet"  defaultValue="skill">
    <Tabs.List  >
        
        <Tabs.Tab  value="education" >
        <div className=' hover:text-violet-600'>
            Education
        </div>
        </Tabs.Tab>
        <Tabs.Tab  value="skill" >
        <div className=' hover:text-violet-600'>
            Skills
        </div>  
        </Tabs.Tab>

        <Tabs.Tab  value="other">
        <div className=' hover:text-violet-600'>
            Other
        </div> 
        </Tabs.Tab>
    </Tabs.List>
   
    <Tabs.Panel value="education">
     {/* <div className=' mx-10 '>
     <div className='  text-2xl font-semibold'>My Educational Pathway</div>    
        <br />
        <div className=' flex flex-col justify-start items-start'>
        <h1 className=' text-red-600'>2nd year(Physics)</h1>
        <small>Dagon University</small>
        </div>
        <br />
        <div className=' flex flex-col justify-start items-start'>
        <h1 className=' text-red-600'>Web Development Foundation</h1>
        <small>MMS One Stop It Solutions</small>
        <small>2022<span>(May)</span>-2022<span>(June)</span></small>
        </div>
         <br />
        <div className=' flex flex-col justify-start items-start'>
        <h1 className=' text-red-600'>Special Web Design</h1>
        <small>MMS One Stop It Solutions</small>
        <small>2022<span>(July)</span>-2023<span>(July)</span></small>
        </div>
            <br />
        <div className=' flex flex-col justify-start items-start'>
        <h1 className=' text-red-600'>Web Application Development</h1>
        <small>MMS One Stop It Solutions</small>
        <small>2022<span>(December)</span>-2023<span>(May)</span></small>
        </div>
    
     </div> */}
    </Tabs.Panel>

    <Tabs.Panel value="skill">
        <h1 className=' text-2xl font-semibold'>
            Front-End Development Skills
        </h1>
        <div className=' my-5 flex flex-wrap justify-center gap-3 items-center'>
            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <FaHtml5/>
                <div>HTML</div>
                </div>
            </div>
            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <FaCss3 />
                <div>CSS</div>
                </div>
            </div>
            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <IoLogoJavascript />
                <div>JavaScript</div>
                </div>
            </div>
            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <FaReact />
                <div>React</div>
                </div>
            </div>
        </div>   
    </Tabs.Panel>
    
    <Tabs.Panel value="other">
        <h1 className=' text-2xl font-semibold'>Software Development Tools</h1>
        <div className=' my-5 flex flex-wrap justify-center gap-3 items-center'>
            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <RiBootstrapLine />
                <div>Bootstrap</div>
                </div>
            </div>

            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <FaSass />
                <div>Sass</div>
                </div>
            </div>

            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <TbBrandTailwind />
                <div>Tailwind</div>
                </div>
            </div>

            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <FaNpm />
                <div>Npm</div>
                </div>
            </div>

            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <TbBrandGit />
                <div>Git</div>
                </div>
            </div>

            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <FaFigma />
                <div>Figma</div>
                </div>
            </div>
             
            <div className=' flex justify-center items-center  bg-red-200/10 backdrop-blur-lg w-28 h-24 rounded-lg'>
                <div className='flex flex-col items-center'>
                <SiRedux />
                <div>Redux</div>
            </div>
            </div>
        </div>    
    </Tabs.Panel>
  </Tabs>

  )

}

export default Abouttwo