const React = require("react")
const Navbar = require("../components/Navbar")



class HomePage extends React.Component{
    render(){
        const {blogs} = this.props
        return(
            <div>
                <head>
                    <link rel="stylesheet" href="/CSS/homepage.css"/>
                </head>
                
                <Navbar />

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
                        <h4>Learning JavaScript 101</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, aut sit blanditiis, fugit numquam explicabo distinctio aliquid quia animi non illo perferendis quaerat nesciunt. Maiores minus eos officiis illo perferendis, autem quod consequatur mollitia nulla praesentium, vel iste tempora delectus temporibus saepe eum necessitatibus repellat quis dicta quas commodi. Iste.</p>
                        <h5>-Mike W. </h5>
                        </div>
                        <div className="borders1">
                        <h4>Intro to MERN Stack</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, aut sit blanditiis, fugit numquam explicabo distinctio aliquid quia animi non illo perferendis quaerat nesciunt. Maiores minus eos officiis illo perferendis, autem quod consequatur mollitia nulla praesentium, vel iste tempora delectus temporibus saepe eum necessitatibus repellat quis dicta quas commodi. Iste.</p>
                        <h5>-Chris G. </h5>
                        </div>
                        <div className="borders1">
                        <h4>Cool CSS Tips & Tricks</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, aut sit blanditiis, fugit numquam explicabo distinctio aliquid quia animi non illo perferendis quaerat nesciunt. Maiores minus eos officiis illo perferendis, autem quod consequatur mollitia nulla praesentium, vel iste tempora delectus temporibus saepe eum necessitatibus repellat quis dicta quas commodi. Iste.</p>
                        <h5>-Emily T. </h5>
                        </div>
                    </div>
                <br/>
                <h2 className="features">Featured Authors</h2>
                    <div className="authorsCont">
                        <div className="borders2">
                            <h4>Samantha W.</h4>
                            <image className="authorPic" src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGluZyUyMHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60">
                            </image>
                            
                        </div>
                        <div className="borders2">    
                            <h4>Joel P.</h4>
                            <image className="authorPic" src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBndXklMjBzbWlsaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"></image>
                        </div>
                        <div className="borders2">
                            <h4>Will S.</h4>
                            <image className="authorPic" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwc21pbGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60"></image>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}


module.exports = HomePage