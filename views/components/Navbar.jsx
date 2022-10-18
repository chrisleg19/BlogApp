const React = require("react")

class Navbar extends React.Component{
    render(){
        const {loggedInUser} = this.props
        return(
            <>
            <head>
            <link rel="stylesheet" href="/CSS/navbar.css"/>
            </head>

            <nav >
                <div className="navBar">
                <a href="/">Home</a>
                <a href="/blog">Blogs</a>
                <a href="/user">Authors</a>
                <a href="/user/signup">Sign Up / Log In</a>

                {loggedInUser && <a href="/user/signout">Log Out</a>}
                </div>

                <div className = "welcome">
                {loggedInUser && <p>Welcome back {loggedInUser}</p>}
                </div>

                
                
            </nav>
            </>

        )
    }
}

//Add styling for the navbar

// const styles ={
//     backgroundColor: "#562B08",
//     color: "orange",
//     textDecoration: "none",
//     textShadow: ".5px .5px .5px #D8D8D8",
//     fontSize: "1.5em",
//     display: "flex",
//     justifyContent:"space-evenly",
//     paddingTop: ".5em",
//     paddingBottom: ".5em",
//     fontWeight: "bold",
//     fontFamily: "Poppins"
    

// }

module.exports = Navbar