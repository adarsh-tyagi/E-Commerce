import React from 'react'

const NotFound = () => {
    return (
        <div style={{margin: "auto", textAlign: "center", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column"}}>
            <h1 style={{color: "tomato", marginBottom: "2rem"}}>Page Not Found</h1>
            <a href="/" style={{textDecoration: "none", fontSize:"1.2rem"}}>Go to Home</a>
        </div>
    )
}

export default NotFound
