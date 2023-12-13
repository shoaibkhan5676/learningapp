import React, { useState } from "react"
import questions from "./Question"
import  Accordion  from "./MyAccordian"




const App=()=>{

    const [data,setdata]=useState(questions)

    return(
        <>
        <section className="main-div">
        <h1>Simple Questions Answer</h1>
        {
            data.map((value,index)=>{
                return <Accordion key={index} {...value}/>
                
            })
        }
        
        </section>
        </>
    )
}



export default App