import React, { useState } from "react";
import axios from "axios";



function SingIn() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
  
    const Signin = () => axios.post('/oneu', { username: UserName, password: Password })
    .then((response) => console.log(response))
    .catch((err) => console.log(err))


    return (
        
        <div className="SIgnPage">
            
            <h2>SignIn</h2>
            <div id="UserNamelabel">UserName</div>
            <br />
            <input onChange={(e) => { setUserName(e.target.value) }}></input>
            <br />
            <div id="UserNamelabel">PassWord</div>
            <br />
            <input type='password' onChange={(e) => { setPassword(e.target.value)}}></input>
            <br />
            <br/>
            // <button className="navSign" onClick={()=>{Signin()}} >Confirm</button>
        </div>
    )
}

export default SingIn