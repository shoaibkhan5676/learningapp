import React,{useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import TypeNote from "./TypeNote"
import Note from "./Note"


const App = () => {
    
    const [val,setval]=useState({
        title:"",
        disc:"",

    })
    const [arr,setarr]=useState([
        {
            title:"Example",
            disc:"Text Here",
    
        }
    ])

    const handleClick=()=>{
        setarr((prev)=>(
            [...prev,val]
        ))


    }

    const handlechange=(event)=>{
        let {name,value}=event.target;
        setval((prevInfo)=>({
            ...prevInfo,
            [name]:value,  

        }))     

    }
    const handledelete=(i)=>{

        let new_arr=arr.filter((element,index)=>{
            return index!==i

        })
        setarr(new_arr)

    }



    return (
        <>
        <Header/>
        <TypeNote change={handlechange} click={handleClick} val={val}/>
        {arr.map((element,index)=>{
            return <Note key={index} id={index} delete={handledelete} title={element.title} discription={element.disc}/>

        })}
        
        <Footer />



        </>
    )
}



export default App