import React, { useContext } from 'react'
import ComC from './ComC'
import {name,lname} from "../App"

const ComB=()=>{
    const fname=useContext(name)
    const llname=useContext(lname)


    return(
        <>
        <h1>Component b: my name is {fname} {llname}</h1>
        <ComC/>
        
        </>
    )
}
export default ComB
