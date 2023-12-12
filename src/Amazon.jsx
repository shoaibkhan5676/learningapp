import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";



const Amazon=()=>{
    return(
        <Card
        key={Sdata[2].id}
        Sname={Sdata[2].Sname} 
        title={Sdata[2].title} 
        link={Sdata[2].link}
        image={Sdata[2].image}/>
    )
}
export default Amazon