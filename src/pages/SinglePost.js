import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function SinglePost(){
    const [postData, setPostData] = useState({});
    const { id } = useParams();
    console.log("id", id);
    useEffect(() => {
        // make a request for the weather by city
        // if(city) {
            axios
            .get(
                // My API endpoint
                // Local
                `http://localhost:4000/post/${id}`
                // Production
                // http://myheroku-deployed-api.heroku.com
            )
            .then(function(response){
                // handle success
                console.log("This is the response:", response.data);
                setPostData(response.data);
            })
            .catch(function(error){
                // handle error
                console.log(error);
            });
        // }
    }, []);
    return(
        <div className = "SinglePost">
            <p>{postData.text}</p>
        </div>
    )
}

export default SinglePost;