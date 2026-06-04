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

            
        </div>
    )
}
export default passwordExample;