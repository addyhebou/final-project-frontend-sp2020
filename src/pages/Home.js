import React from 'react';

function Home({ userInformation }){
    console.log("userInformation", userInformation);
    // const email = userInformation.email;
    // const uid = userInformation.uid;

    return(
        <div>
            <h1>Home</h1>
            {/* <p>{email}</p> */}
            {/* <p>{uid}</p> */}
        </div>
    )
};

export default Home