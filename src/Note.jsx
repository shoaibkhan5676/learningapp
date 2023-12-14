import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const Note=(props)=>{
  
    return(
        <>
        
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.discription}</p>
            
            <Button onClick={() =>{ props.delete(props.id)}} id="butn">
            <DeleteIcon sx={{ color: "black" }} className="deleteicon"/>
            </Button>
        </div>
        
        </>
    )
}
export default Note