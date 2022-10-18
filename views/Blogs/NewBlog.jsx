const React = require("react")
const Navbar = require("../components/Navbar")

class NewBlog extends React.Component{
    render(){
        return(
            <body>
                <head>
                <link rel="stylesheet" href="/CSS/newblog.css"/> 
                </head>

            <Navbar/>

                <h1>Create New Blog</h1>

                <div className="formCont">

                <form className="form" action="/blog" method="POST">
                    <h5>Title:</h5> <input className="titleInput" type="text" name="title" required></input>
                    {/* <h5>Author:</h5> <input className="authorInput" type="text" name="author" required></input> */}
                    <h5>Profile Pic:</h5> <input className="profilePicInput" type="text" name="authorImage"></input>
                    <h5>Body:</h5> <textarea name="body" rows="20" cols="50" autofocus wrap="hard" spellcheck="true" required></textarea>
                    <div className="sponsoredBx">
                    <h5>Sponsored:</h5> <input type="checkbox" name="sponsored"></input>
                    </div>

                    <div className="submitBtnCont">
                    <input className="submitBtn" type="submit" value="Submit Blog" />
                    </div>

                </form>

                </div>

            </body>
        )

    }
}

module.exports = NewBlog