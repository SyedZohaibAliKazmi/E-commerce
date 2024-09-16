import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home"
import Product from './Pages/Product'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar/Navbar"



function App() {   
    
    return(
       <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
       
       </BrowserRouter>
    )
  
}

export default App