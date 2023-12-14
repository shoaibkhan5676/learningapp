import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

let container=document.getElementById("root")
let root=createRoot(container)

root.render(
   <>
   <App/>
   </>
)