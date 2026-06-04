import { useState } from "react"

function passwordExample(){

    const[showPassword, setShowPassword]=useState(false);

    return(
        <div style={{padding:"20px"}}>
            <h2>Password Toggle Example</h2>

            <input 
            type={showPassword ? "text":"password" }
            placeholder="Enter Password"
            />

            <br /><br />

            <button onClick={()=>setShowPassword(!showPassword)}>

                {showPassword ? "Hide Password":"Show password"}

            </button>

            
        </div>
    )
}
export default passwordExample;