import React, { useEffect } from "react";

function App() {

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
    }, []);



    return (
        <>

        </>
    )
    
}

export default App;