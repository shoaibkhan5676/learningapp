import React, { useState } from "react"



const App = () => {
    let [counter,setcounter]=useState(0)

    const handleIncrement=()=>{
        setcounter(counter+1)

    }
    const handleDecrement=()=>{
        if(counter!==0){
            setcounter(counter-1)
        }
        else{
            alert("Sorry:Zero Limit Reached")
        }
        
    }
    





    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <div className="counter_div">
                        {counter}
                    </div>

                    <div className="button_div">
                        <button onClick={handleIncrement}>Increment</button>
                        <button disabled={counter<0} onClick={handleDecrement}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default App