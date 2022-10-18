const React = require("react")
const Navbar = require("../components/Navbar")


class EditBlog extends React.Component{
    render(){
        // console.log("from edit page", this.props.blog)
        const {blog} = this.props
        console.log(blog)
        return(
            <body>
                <head>
                <link rel="stylesheet" href="/CSS/newblog.css"/> 
                </head>

            <Navbar/>

                <h1>Edit Blog</h1>

                <div className="formCont">

                <form className="form" action={`/blog/${blog._id}?_method=PUT`} method="POST">
                    <h5>Title:</h5> <input className="titleInput" type="text" name="title" defaultValue={blog.title}></input>
                    <h5>Author:</h5> <input className="authorInput" type="text" name="author" defaultValue={blog.author}></input>
                    <h5>Profile Pic:</h5> <input className="profilePicInput" type="text" name="authorImage" defaultValue={blog.authorImage}></input>
                    <h5>Body:</h5> <textarea name="body" rows="20" cols="50" autoFocus wrap="hard" spellCheck="true" defaultValue={blog.body} ></textarea>
                    <div className="sponsoredBx">
                    <h5>Sponsored:</h5> <input type="checkbox" name="sponsored" defaultChecked={blog.sponsored}></input>
                    </div>

                    <div className="submitBtnCont">
                    <input className="submitBtn" type="submit" value="Edit Blog" />
                    </div>

                </form>

                </div>

            </body>
        )

    }
}

module.exports = EditBlog