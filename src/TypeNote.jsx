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

    const [expand,setexpand]=useState(false)

    return(
        <>
        <div onDoubleClick={()=>setexpand(false)} className='main_note'>
            <form >
                {expand?
            <input type="text"  name="title" id="" value={props.val.title} onChange={(s)=>{props.change(s)}} placeholder='Title: ' autoComplete='off' />
            :null}
            <textarea name="disc" id=""  cols="" onClick={()=>setexpand(true)} rows="" value={props.val.disc} onChange={(s)=>{props.change(s)}} placeholder='Write A New Note...'></textarea>
            {expand?
            <Button onClick={()=>{props.click()}}><AddIcon className='plus_sign'/></Button>
            :null}
            </form>
        </div>
        
        </>
    )
}
export default TypeNote