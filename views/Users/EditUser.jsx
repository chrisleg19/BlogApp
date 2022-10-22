const React = require("react")
const Navbar = require("../components/Navbar")


class EditUser extends React.Component{
    render(){
        const {user, loggedInUser} = this.props
        // console.log("USER PROP",user)
        return(
            <body>

                <head>
                <link rel="stylesheet" href="/CSS/newblog.css"/> 
                </head>

                <Navbar loggedInUser={loggedInUser}/>

                <h1>Edit User Page</h1>

                <div className="formCont">

                <form className="form" action={`/user/${user._id}?_method=PUT`} method="POST">
                    <h5>Username:</h5> <input className="titleInput" type="text" name="username" defaultValue={user.username}></input>
                    <h5>Author:</h5> <input className="authorInput" type="text" name="email" defaultValue={user.email}></input>
                    <h5>Profile Pic:</h5> <input className="profilePicInput" type="text" name="profilePic" defaultValue={user.profilePic}></input>
                    <h5>Bio:</h5> <textarea name="bio" rows="20" cols="50" autoFocus wrap="hard" spellCheck="true" defaultValue={user.bio} ></textarea>
                    

                    <div className="submitBtnCont">
                    <input className="submitBtn" type="submit" value="Edit User" />
                    </div>

                </form>

                </div>







            </body>
        )



    }



}

module.exports = EditUser