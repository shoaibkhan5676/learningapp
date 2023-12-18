import React from "react"
import { Route,Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"
import Menu from "./Menu"
import User from "./User"

const App=()=>{
    const Home=()=>{
        return (
            <>
            <h1>This is Home</h1>
            
            </>
        )

    }
    

    return(
        <>
        <Menu/>
        <Routes>
            <Route exact  path='/' element={<Home/>}/>
            <Route exact  path='/about' element=<About name="About" />/>
            <Route exact path='/contact/:admin' element=<Contact/>/>
            <Route exact path='/user/:name/:lname' element=<User/>/>
            <Route path="/*" element=<Error/>/>

        </Routes>
      
     
       
        </>
    )
}
export default App