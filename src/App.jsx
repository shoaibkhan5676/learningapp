import React, { useState } from "react";
import TodoItem from "./TodoItem";



const App = () => {
    let [inputfield,setinputfield]=useState("")
    const [todoitem,settodoitem]=useState([])

    const handlechange=(event)=>{
        setinputfield(event.target.value)

    }
    const handleclick=()=>{
        if(inputfield!==""){
            settodoitem([...todoitem,inputfield])
            setinputfield("")
        }
    }
    const handledeletelick=(index)=>{
        let newtodoitem=todoitem.filter((item,ind)=>{
            return ind!==index 

        })
        settodoitem(newtodoitem)

    }





    return (
        <>

            <div className="main_div">

                <div className="center_div">
                    <div className="heading_div">
                        <h1>TODO LIST</h1>
                    </div>
                    <div className="adding_div">
                        <input type="text" name="inp" value={inputfield} onChange={handlechange} placeholder="Add an Item" id="" />
                        <button onClick={handleclick}>+</button>
                    </div>
                    <div className="todo_div">
                        {todoitem.map((element,index)=>{
                            return <TodoItem key={index} id={index} message={element} delete={handledeletelick}/>

                        })}
                    </div>



                </div>
            </div>


        </>
    )
}


export default App