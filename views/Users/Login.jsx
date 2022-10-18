const React = require("react")
const Navbar = require("../components/Navbar")

class Login extends React.Component{
    render(){
        return(
            <div>

                <Navbar/>

                <h1>Login Page</h1>

                <form action="/user/login" method="POST">
                    <fieldset>
                        <legend>Log in to your account</legend>

                        <label htmlFor="email">Email</label>
                        <br/>
                        <input type="text" name="email" required/>
                        <br/>
                        <abel htmlFor="password">Password</abel>
                        <br/>
                        <input type="password" name="password" required/>
                        <br/>
                        <input type="submit" value="Login"/>

                    </fieldset>
                </form>



            </div>
        )
    }
}

module.exports = Login