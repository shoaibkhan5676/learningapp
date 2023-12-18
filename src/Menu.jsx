import React from "react"
import {NavLink} from "react-router-dom"


const Menu=()=>{
    return(
        <>

        <div className="menu">
            <ol>
                <li><NavLink className={({ isActive }) => {
		            return isActive ? 'active_class' : '';
		            }}
                     to="/">Home</NavLink></li>
                <li><NavLink   className={({ isActive }) => {
		            return isActive ? 'active_class' : '';
		            }}
                  to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>{ return isActive?"active_class":""}} to="/contact/a">Contact</NavLink></li>  
                <li><NavLink className={({isActive})=>{ return isActive?"active_class":""}} to="/user/Shoaib Khan/Khan">User</NavLink></li>  
            </ol>
        </div>
        </>
    )
}

export default Menu