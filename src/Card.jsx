import React from "react"




function Card(props){

    return(
    <>

    <div className="cards">
        <div className="card">
            <img src={props.image} alt="" className="card_img" />
            <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.Sname}</h3>
                <a href={props.link} rel="noreferrer" target="_blank">
                    <button>WATCH NOW</button>
                    {/* <button type="button" class="btn btn-outline-dark">Dark</button> */}
                </a>
            </div>
        </div>
    </div>
    
    
    
    </>)
}



export default Card