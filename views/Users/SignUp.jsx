const React = require("react")
const Navbar = require("../components/Navbar")

class SignUp extends React.Component{
    render(){
        return(
            <div>

                <Navbar/>

                <h1>Create A New Account</h1>

                <form action="/user/signup" method="POST">
                    <fieldset>
                        <legend>Create An Account</legend>

                        <label htmlFor="username">Username</label>
                        <br/>
                        <input type="text" name="username" required/>
                        <br/>

                        <label htmlFor="email">Email</label>
                        <br/>
                        <input type="text" name="email" required/>
                        <br/>

                        <label htmlFor="password">Password</label>
                        <br/>
                        <input type="password" name="password" required/>
                        <br/>

                        <input type="submit" value="Sign Up"/>

                    </fieldset>
                </form>

                <div>
                    <p>Already have an account? <a href="/user/login">Sign In</a></p>
                </div>

            </div>

        )

    }
}

module.exports = SignUp