import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home/Home"
import Product from './Pages/Product/Product'
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
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