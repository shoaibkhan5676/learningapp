import React from 'react'
import { useParams } from 'react-router-dom'

const Contact=()=>{
    const {admin}=useParams()
    return(
        <>
        <h1>This is Contact {admin}</h1>
        </>
    )
}
export default Contact