import React, { useEffect, useState} from 'react';
import axios from 'axios' ;
// Components
import CreatePostForm from '../components/CreatePostForm'

function Home({ userInformation }){
    const [allPosts, setAllPosts] = useState([]);
    const email = userInformation.email;
    const uid = userInformation.uid;

    useEffect(() => {
            axios
            .get(
                // My API endpoint
                // Local
                `http://localhost:4000`
                // Production
                // http://myheroku-deployed-api.heroku.com
            )
            .then(function(response){
                // handle success
                console.log("This is the response:", response.data);
                setAllPosts(response.data);
            })
            .catch(function(error){
                // handle error
                console.log(error);
            });
        // }
    }, []);

    // Create Post
    function createPostFunction(e){
        e.preventDefault();
        let text = e.currentTarget.postText.value;
        let idFromText = text.replace(/\s+/g, "-").toLowerCase().substr(0,16);
        let userId = uid;

        console.log(text, idFromText, userId);

        axios
            .get(
                // My API endpoint
                // Local
                `http://localhost:4000/create?text=${text}&id=${idFromText}&userId=${userId}`
                // Production
                // http://myheroku-deployed-api.heroku.com
            )
            .then(function(response){
                // handle success
                console.log("response:", response);
            })
            .catch(function(error){
                // handle error
                console.log(error);
            });
    }

    console.log(allPosts);
    return(
        <div className = "Wrapper">
            <h1>Welcome {email}</h1>
            <div className = "CreatePost">
                <h2>Add a Post</h2>
                <CreatePostForm createPostFunction={createPostFunction}/>
            </div>
            <div className = "posts">
                <h2>All Posts</h2>
                {allPosts.map((post, i) =>(
                    <p key = {i}><a href = {`/post/${post.id}`}>{post.text}</a></p>
                ))}
            </div>
        </div>
    )
};

export default Home