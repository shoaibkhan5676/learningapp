import React from "react"




let greeting=""
let greetingColor=""
let currdate=new Date()
currdate=currdate.getHours()
let css={
   
}

if(currdate<=11){
   greeting="Good Morning"
   css.color="blue"
   
}
else if(currdate>11&&currdate<=19){
   greeting="Good Afternoon"
   css.color="orange"
  
   
}
else{
   greeting="Good Night"
   css.color="cyan"
  
}


function Greeting(){
    return(
        <>
        <span style={css}>{greeting}</span>
        </>
    )

}
export default Greeting

