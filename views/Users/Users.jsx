const React = require ("react")
const Navbar = require("../components/Navbar")

class Users extends React.Component{
    render(){
        const {users, blog} = this.props
        return(
            <body>
                <head>
                <link rel="stylesheet" href="/CSS/users.css"/>
                </head>

                <Navbar/>
                
                <h1>Users Page</h1>
                <a href="/">Home</a>

                <ul>
                    {users.map((user,idx)=>(
                        <li key={idx}>
                           <a>{user.username}</a>
                        </li>

                    ))}



                </ul>

            </body>


        )


    }


}

module.exports = Users