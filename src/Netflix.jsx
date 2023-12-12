import React from "react"
import Card from "./Card"
import Sdata from "./Sdata"



const Netflix = () => {
    return (
        <>
            <Card
                key={Sdata[0].id}
                image={Sdata[0].image}
                title={Sdata[0].title}
                Sname={Sdata[0].Sname}
                link={Sdata[0].link}
            />

        </>
    )

}
export default Netflix