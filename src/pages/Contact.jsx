import { Input, Textarea } from '@mantine/core'
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className=' h-screen px-5'>
        <div className=' container mx-auto py-32 text-center flex items-center justify-center h-full'>
            <div className=' flex flex-col mt-28 w-full max-w-[500px]'>
                <h1 className=' text-2xl font-bold text-center mb-10'>
                    Let's <span className=' text-red-600'>connect.</span>
                </h1>
                <form className=' flex-1 flex flex-col gap-6  mx-auto'>
                    <div className="flex gap-x-6 w-full">
                        <Input autoFocus type="text" className='' placeholder='Name' />
                        <Input type="text" placeholder='Email' />
                    </div>
                    <Input type="text" placeholder='Subject' />
                    <Textarea placeholder='Message' name="" id="" cols="30" rows="10"/>
                    <button className=' btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex justify-center items-center overflow-hidden py-2 group hover:border-red-500 '>
                        <span className=' group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
                        <BsArrowRight className=' -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 text-[22px] transition-all duration-300 absolute' />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact