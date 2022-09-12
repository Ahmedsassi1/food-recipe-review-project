import React, { useState } from "react";
import axios from 'axios';

function SignUP() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');

    const Signup =()=> axios.post('/addOneu', { username: UserName, password: Password })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))

    return (

        <div className="SIgnPage">

            <h2>SignUP </h2>
            <h3>welcome to your community</h3>
            <div id="UserNamelabel">UserName</div>
            <br />
            <input onChange={(e) => { setUserName(e.target.value) }}></input>
            <br />
            <div id="UserNamelabel">PassWord</div>
            <br />
            <input type='password' onChange={(e) => { setPassword(Password) }}></input>
            <br />
            <br />
            <button className="navSign" onClick={()=>{Signup()}}>Confirm</button>
        </div>
    )
}

export default SignUP