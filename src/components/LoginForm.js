import React from 'react';
import "../LoginForm.css"

function LoginForm({LoginFunction}){
    return(
        <div>
            <form className = "SignupForm" onSubmit = {(e) => LoginFunction(e)}>
                <div className = "textFields">
                    <label htmlFor = "loginEmail">Email</label>
                    <input type = "text" name = "loginEmail"/>
                    {/* <br/> */}
                    <hr/>
                    <label htmlFor = "loginPassword">Password</label>
                    <input type = "text" name = "loginPassword"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    );

}

export default LoginForm;