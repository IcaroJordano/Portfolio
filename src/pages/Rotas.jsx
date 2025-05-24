import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ServicesPage from "./ServicesPage"
import SkillsPage from "./SkillsPage"
import ProjectsPage from "./ProjectsPage"



export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/skills" element={<SkillsPage/>}/> 
            <Route path="/projects" element={<ProjectsPage/>}/> 
        </Routes>
    )
}