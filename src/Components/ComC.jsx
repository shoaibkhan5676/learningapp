import React from 'react'
import {name,lname} from "../App.jsx"

const ComC=()=>{
    return(
        <>
        <h1>ok</h1>
        <name.Consumer>{(name)=>{
            return(
                <lname.Consumer>{(lname)=>{return(
                    <h1>My name is {name} {lname}</h1>
                )}}</lname.Consumer>
                 ) }}
        </name.Consumer>`
        </>
    )
}
export default ComC
