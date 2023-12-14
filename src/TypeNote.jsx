import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



const TypeNote=(props)=>{


    // const [val,setval]=useState({
    //     title:"",
    //     disc:"",

    // })

    // const handleClick=()=>{
    //     console.log(val.title)
    //     console.log(val.disc)


    // }

    // const handlechange=(event)=>{
    //     let {name,value}=event.target;
    //     setval((prevInfo)=>({
    //         ...prevInfo,
    //         [name]:value,  

    //     }))
        

    // }

    return(
        <>
        <div className='main_note'>
            <form >
            <input type="text" name="title" id="" value={props.val.title} onChange={(s)=>{props.change(s)}} placeholder='Title: ' autoComplete='off' />
            <textarea name="disc" id="" cols="" rows="" value={props.val.disc} onChange={(s)=>{props.change(s)}} placeholder='Write A New Note...'></textarea>
            <Button onClick={()=>{props.click()}}><AddIcon className='plus_sign'/></Button>
            </form>
        </div>
        
        </>
    )
}
export default TypeNote