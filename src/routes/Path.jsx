import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Error from "../pages/Error"
import Projects from "../pages/Projects"
import Services from "../pages/Services"
import Contact from "../pages/Contact"

const Path = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="*" element={<Error/>}/>

    </Routes>
    </>
  )
}

export default Path