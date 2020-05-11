import React from 'react';
import "../LoginForm.css"
import "../App.css"

function CreatePostForm({createPostFunction}){
    return(
        <div>
            <form className = "CreatePostForm" onSubmit = {(e) => createPostFunction(e)}>
                <div className = "textFields">
                    <label htmlFor = "postText">Text</label>
                    <input type = "text" name = "postText"/>
                </div>
                <button>Create Post</button>
            </form>
        </div>
    );

}

export default CreatePostForm;