import React, { useEffect } from "react";

function App() {

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => )
        .then()
        .catch(e => console.log(e));
    }, []);



    return (
        <>

        </>
    )
    
}

export default App;