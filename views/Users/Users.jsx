const React = require ("react")
const Navbar = require("../components/Navbar")

class Users extends React.Component{
    render(){
        const {users, blogs, loggedInUser} = this.props
        // console.log("BLOGS PROP",blogs)
        // console.log("BLOGS TITLEs", blogs[0].title)

        return(
            <body>
                <head>
                <link rel="stylesheet" href="/CSS/users.css"/>
                </head>

                <Navbar loggedInUser={loggedInUser}/>
                
                <h1>Meet the Authors</h1>
                

                <ul className="listContainer">
                    {users.map((user,idx)=>(
                        
                        <li key={idx} className="list">
                           <h3>{user.username}</h3>
                            
                            {blogs.map(blog=>user.username===blog.author?<div key={idx}>{<image src={user.profilePic} className="bioProfilePic" key={idx}></image>}</div>:null)}
                        
                            <h4>{user.email}</h4>

                            <p>{user.bio}</p>

                            {user.username===loggedInUser?(<a href={`/user/${user._id}/edit`}>Edit</a>):null}


                        </li>
                    ))}
                </ul>
                
            </body>
        )
    }
}

module.exports = Users