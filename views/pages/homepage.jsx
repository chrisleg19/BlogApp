const React = require("react")
const Navbar = require("../components/Navbar")



class HomePage extends React.Component{
    render(){
        const {blogs, users, loggedInUser} = this.props
        // console.log("HOME BLOGS INFO", blogs)
        // console.log("HOME USERS INFO", users)
        function shuffleBlogsArr(blogs, num){
        const newBlogsArr = [...blogs].sort(()=>0.5 - Math.random())
        return newBlogsArr.slice(0,num);
        }
        // console.log(shuffleBlogsArr(blogs, 3))
        const featuredBlogsArr = shuffleBlogsArr(blogs,3)
        // console.log("BLOG1",featuredBlogsArr[0].title)
        // console.log("BLOG2",featuredBlogsArr[1].title)
        // console.log("BLOG3",featuredBlogsArr[2].title)

        function shuffleUsersArr(users, num){
            const newUsersArr = [...users].sort(()=>0.5 - Math.random())
            return newUsersArr.slice(0,num);
            }

            const featuredUsersArr = shuffleUsersArr(users,3)

            // console.log("USER1",featuredUsersArr[0].username)
            // console.log("USER2",featuredUsersArr[1].username)
            // console.log("USER3",featuredUsersArr[2].username)

        return(
            <div>
                <head>
                    <link rel="stylesheet" href="/CSS/homepage.css"/>
                </head>
                
                <Navbar loggedInUser={loggedInUser} />

                <h1>Software Engineering: <br/> <span className="levelOne">Level 1</span></h1>

                <div className="marioCont">
                <image className="mario" src="https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                </div>

                    <p className="welcomeHomePage">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nisi doloremque odit nesciunt eligendi, reiciendis ab fugit delectus quaerat nam voluptas impedit dolore quasi quidem, explicabo autem vel. Id asperiores, voluptas quidem laudantium architecto a voluptatum quibusdam dolore, dolor corrupti illo provident sapiente numquam hic assumenda omnis aperiam itaque culpa iure quis perferendis minima. Dolorem optio modi sint, dicta atque maxime sapiente saepe ipsam. Aspernatur dolores error tenetur! Incidunt omnis quisquam harum corrupti earum ab assumenda saepe obcaecati veniam iusto, debitis aliquam nostrum sed vel! Omnis, iste officia. Dolore dignissimos alias nobis odit sit quisquam in nemo voluptatem omnis laudantium.</p>
                
                <div className="homeContainer">
                <h2 className="features">Featured Blogs</h2>
                    <div className="blogsCont">
                        <div className="borders1">
                        {/* <h4>Learning JavaScript 101</h4> */}
                        {/* <h4>{blogs[Math.floor(Math.random()*blogs.length)].title.toString()}</h4> */}
                        <h4>{featuredBlogsArr[0].title}</h4>
                        <p>{featuredBlogsArr[0].body}</p>
                        <h5>{featuredBlogsArr[0].author}</h5>
                        </div>
                        <div className="borders1">
                        <h4>{featuredBlogsArr[1].title}</h4>
                        <p>{featuredBlogsArr[1].body}</p>
                        <h5>{featuredBlogsArr[1].author}</h5>
                        </div>
                        <div className="borders1">
                        <h4>{featuredBlogsArr[2].title}</h4>
                        <p>{featuredBlogsArr[2].body}</p>
                        <h5>{featuredBlogsArr[2].author}</h5>
                        </div>
                    </div>
                <br/>
                <h2 className="features">Featured Authors</h2>
                    <div className="authorsCont">
                        <div className="borders2">
                            <h4>{featuredUsersArr[0].username}</h4>
                            <image className="authorPic" src={featuredUsersArr[0].profilePic}>
                            </image>
                            
                        </div>
                        <div className="borders2">    
                            <h4>{featuredUsersArr[1].username}</h4>
                            <image className="authorPic" src={featuredUsersArr[1].profilePic}></image>
                        </div>
                        <div className="borders2">
                            <h4>{featuredUsersArr[2].username}</h4>
                            <image className="authorPic" src={featuredUsersArr[2].profilePic}></image>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}


module.exports = HomePage