import React, { useState } from "react";

function SignUP() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');

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
            <input onChange={(e) => { setPassword(hashing(Password));console.log(Password) }}></input>
            <br />
            <br />
            <button className="navSign">Confirm</button>
        </div>
    )
}

export default SignUP