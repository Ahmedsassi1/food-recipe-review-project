import React, { useState } from "react";



function SingIn() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
  



    return (
        
        <div className="SIgnPage">
            
            <h2>SignIn</h2>
            <div id="UserNamelabel">UserName</div>
            <br />
            <input onChange={(e) => { setUserName(e.target.value) }}></input>
            <br />
            <div id="UserNamelabel">PassWord</div>
            <br />
            <input onChange={(e) => { setPassword(e.target.value)}}></input>
            <br />
            <br/>
            <button className="navSign">Confirm</button>
        </div>
    )
}

export default SingIn