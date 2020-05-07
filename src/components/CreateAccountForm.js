import React from 'react';
import "../LoginForm.css"

function CreateAccountForm({CreateAccountFunction}){
    return(
        <div>
            <form className = "SignupForm" onSubmit = {(e) => CreateAccountFunction(e)}>
                <div className = "textFields">
                    <label htmlFor = "createEmail">Email</label>
                    <input type = "email" name = "createEmail"/>
                    <hr/>
                    <label htmlFor = "createEmail">Password</label>
                    <input type = "password" name = "createPassword"/>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    );

}

export default CreateAccountForm;