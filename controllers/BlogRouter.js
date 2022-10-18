//bring in express
const { application } = require("express")
const express = require("express")
const BlogModel = require("../models/BlogSchema")


//create and instance of router
const router = express.Router()


//Add Privacy to this router or routes
//checking to see if user is signed in, if true=>continue routes, if false=>redirect to ("/login")
//created middleware function (coming from session in UserRouter.js)
router.use((req, res, next)=>{
    if (req.session.loggedIn){
        next()
    } else {
        res.redirect("/user/login")
    }
})


//========= GET: Get all Blogs 

router.get("/", async (req,res)=>{
    try{
    //.find({}) with an empty object returns all documents from db
    //.find({email:"someone@email.com"}) is an example of using a filter to find specific data in db
    //docs: https://mongoosejs.com/docs/api.html#model_Model-find
    const blogsFromDb = await BlogModel.find({})
    // res.send(blogs)
    res.render("Blogs/Blogs", {blogs: blogsFromDb})
    } catch (error){
        console.log(error);
        res.send(403).send("Cannot get")
    }
})


//=========== POST: Create new Blog

//render Create New Blog Form
router.get("/new", async(req,res)=>{
    try{
        res.render("Blogs/NewBlog")
    }catch(error){
        console.log(error)
        res.status(403).send("Cannot Get NewBlog Form")
    }
})

//POST request for new Blog

//======== Example with async await: =========

//mark your function with async
//use await to wait on the function to retrieve data
//Use try{} catch{} for errors
router.post("/", async (req, res)=>{
    try{
        if(req.body.sponsored==="on"){
            req.body.sponsored = true;
        } else{
            req.body.sponsored = false;
        }
        //set the author to the logged in user
        req.body.author = req.session.username

        const newBlog = await BlogModel.create(req.body)
        console.log(newBlog)
        // res.send(newBlog) 
        res.redirect("/")
    }catch(error){
        console.log(error);
        res.send(403).send("Cannot create")
    }
})


//======= Example with .then & .catch =========

//post route (saves data to db)
//note: must set up middleware in order for .post to work
//data will be in req.body
// router.post("/", (req, res)=>{
    
    //Create a new blog
    // BlogModel.create(req.body)
    // .then(data => {
    //     console.log(data);
    //     res.send(data)
    // })
    // .catch(error =>{
    //     console.log(error);
    //     res.status(403).send("Cannot create")
    // })
// })


//============ GET: Get Blog by ID 

//because this is part of the blogs router, its already prefixed with router.get("/blogs/:id", (req,res)=>{})...but I don't have to input
router.get("/:id", async(req, res)=>{
    //console log the session object to see the properties available for destructuring. 
        //Note: we set these properties in the UserRouter.js (req.session.username = user.username AND req.session.loggedIn = true)
    console.log("session object",req.session)
    try{
        const blogInDb = await BlogModel.findById(req.params.id)
        // res.send(blog)
        //loggedInUser: req.session.username (checking if logged in user is the blog author)
        res.render("Blogs/BlogShow",{blog: blogInDb, loggedInUser: req.session.username})
    } catch (error){
        console.log(error)
        res.status(403).send("Cannot get")
    }
})



//============= DELETE:

router.delete("/:id", async(req,res)=>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        // res.send("Blog Deleted")
        res.redirect("/")
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot Delete")
    }
})


// ============ PUT: Update by ID

//Example with async await:  

router.get('/:id/edit', async (req, res) => {
    try {
      const foundBlog = await BlogModel.findById(req.params.id);
      res.render('Blogs/EditBlog', { blog: foundBlog });
    } catch (error) {
      console.log(error);
      res.status(403).send('cannot get edit page')
    }
  })

//Example without async await

// router.get("/:id/edit", (req,res)=>{
//         const {id} = req.params
//         console.log("getting blog info for edit form")
//         BlogModel.findById(id,(error,foundBlog)=>{
//             if(error){
//                 console.log(error)
//                 res.status(403).send("id not found")
//             }
//             console.log("placing blog info on edit form")
//             res.render("Blogs/EditBlog", {blog: foundBlog})
//         })
// })

router.put("/:id", async (req,res)=>{
    try{
    //use {"returnDocument" : "after"} to see document after update (in Postman)
        //Note: default option is to show document before update (in Postman)

    if(req.body.sponsored === "on"){
        req.body.sponsored = true;
    } else {
        req.body.sponsored = false;
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {"returnDocument" : "after"})
    // res.send(updatedBlog)


    res.redirect(`/blog/${req.params.id}`)
    

    } catch (error){
        console.log(error)
        res.status(403).send("Cannot put")
    }
})






//export
module.exports = router;