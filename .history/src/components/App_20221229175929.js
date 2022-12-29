import React, { useState, useEffect } from "react";

function App() {
    const [dog, setDog] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setDog(data.message))
        .catch(e => console.log(e));
    }, []);



    return (
        <img src={ dog } alt="A Random Dog"/>
    )
    
}

export default App;