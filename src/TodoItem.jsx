import React from "react"

const TodoItem = (props) => {

 
    return (
        <>
            <div className="item">
                <button onClick={()=>{props.delete(props.id)}}>x</button>
                <p>{props.message}</p>
            </div>


        </>
    )
}
export default TodoItem