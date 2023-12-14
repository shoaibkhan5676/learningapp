import React from "react";


const Footer=()=>{
    const d=new Date()


    return(
        <>
        <footer id="footer">
            <p>Copyright © {d.getFullYear()}</p>
        </footer>
        
        </>
    )
}

export default Footer