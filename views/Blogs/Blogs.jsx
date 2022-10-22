const React = require("react")
const Navbar = require("../components/Navbar")

class Blogs extends React.Component{
    render(){
        const {blogs, users, loggedInUser, newBlog} = this.props
        // console.log("USERS DATA",users)
        // console.log("BLOGS DATA", blogs)
        // console.log(blogs)
        return(
            <body>
                <head>
                    <link rel="stylesheet" href="/CSS/blogs.css"/> 
                </head>

                <Navbar loggedInUser={loggedInUser} newBlog={newBlog}/>

                {/* {blogs.map(blog=>blog.author===loggedInUser?(<div className="createNewDiv">
                <a className="createNewBtn" href="/blog/new">Create New Blog</a>
                </div>):null)} */}

                <h1>All Blogs</h1>
                

                <ul className="blogsCont">
                    {blogs.map((blog,idx)=>(
                        <li className="blogsPreview" key={idx}>
                            <div className="bpHeaders">
                            <h4><a href={`/blog/${blog._id}`}>{blog.title}</a></h4>
                            </div>
                            
                            <div className="bpHeaders">
                             <h4>{blog.author}</h4> 
                            </div>

                        <div className="bpHeaders"><a href={`/blog/${blog._id}`}>{users.map(user=>blog.author===user.username?<div key={idx}>{<image src={user.profilePic} className="authImg" key={idx}></image>}</div>:null)}</a></div>

                            {/* <div className="bpHeaders">
                                <a href={`/blog/${blog._id}`}><image className="authImg" src={blog.authorImage} ></image></a>
                            </div> */}
                            
                            <div className="bpHeaders">
                            <h3>Likes:</h3>  <h4>{blog.likes}</h4>
                            </div>
                        </li>


                    ))}

                </ul>
                
                
            </body>

        )
    }
}

module.exports = Blogs