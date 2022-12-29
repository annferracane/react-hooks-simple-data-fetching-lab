import React, { useEffect } from "react";

function App() {

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
    }, []);



    return (
        <img src="" alt="A random dog"/>
    )
    
}

export default App;