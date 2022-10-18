const express = require("express")
const UserModel = require("../models/UserSchema")
//importing bcryptjs: a pre-compiled version of bcrypt which we will use to encrypt passwords
const bcrypt = require("bcryptjs")

const router = express.Router()

// GET all users
router.get("/", async (req,res)=>{
    try{
        const usersFromDb = await UserModel.find({})
        // res.send(users)
        res.render("Users/Users", {users: usersFromDb})
    } catch (error){
        console.log(error)
        res.send(403).send("Cannot Get All Users")
    }
})


//route for Sign Up

//POST (create) new user

router.post("/signup", async (req, res)=>{
    try{
        //Checking if email (or username) already exist before attempting to post
            //.find() returns an array of documents
        const userAlreadyExist = await UserModel.find({email: req.body.email});
        console.log(userAlreadyExist)
        //Note: An empty array will return, so use [0] to check if there is an object in the array at index 0.
        if (userAlreadyExist[0]){
            //Note: Use return keyword to stop code since "user already exist".  If user doesn't exist, the code moves forward to creating new user.
           return res.send ("User Already Exist!")
        }

        // To hash a password.  The higher the .genSalt(#), the more secure your hash will be
        const SALT = await bcrypt.genSalt(10)
        //re-assigning the password to the hashed/encrypted password
        req.body.password = await bcrypt.hash(req.body.password, SALT)
        //creating new user
        const newUser = await UserModel.create(req.body)
        // res.send(newUser)
        res.redirect("/user/login")
    }catch(error){
        console.log(error);
        res.send(403).send("Cannot Create/POST")
    }
})

//render SignUp form
router.get("/signup", (req, res)=>{
    res.render("Users/SignUp")
})



//route for Logging In

//render Login form
router.get("/login", (req,res)=>{
    res.render("Users/Login")
})


//Log in the User
router.post("/login", async(req, res)=>{
    try{
        //find user by email (authentication)
            //.findOne() doesn't return an array, just a single document
        const user = await UserModel.findOne({email: req.body.email})
        if (!user) return res.send("Please check your email and password.")
        //check if passwords match (authentication)
            //req.body.password is the password from the login form, user.password is the password from db (const user above)
        const decodedPassword = await bcrypt.compare(req.body.password, user.password)
        if(!decodedPassword) return res.send("Please check your email and password.")
        //set the user session
            //create a new username in the session object using user info from db
        req.session.username = user.username
            //creating a new session property "loggedIn", and setting it to true
        req.session.loggedIn = true
        //redirect to /blogs
        res.redirect("/blog")
    } catch(error){
        console.log(error);
    }
})



//Route to SIGN OUT the User (& destroy session)

router.get("/signout", (req, res)=>{
    //req.session has the cookie for the logged in user
    try{
        //destroy the user session
        req.session.destroy()
        //redirect to homepage
        res.redirect("/")
    } catch(error){
        console.log(error);
    }
})



//router before implementing bcryptjs on 10/17/2022:

//POST (create) new user

// router.post("/", async (req, res)=>{
//     try{
//         //Checking if email (or username) already exist before attempting to post
//         const userAlreadyExist = await UserModel.find({email: req.body.email});
//         console.log(userAlreadyExist)
//         //Note: An empty array will return, so use [0] to check if there is an object in the array at index 0.
//         if (userAlreadyExist[0]){
//             //Note: Use return keyword to stop code since "user already exist".  If user doesn't exist, the code moves forward to creating new user.
//            return res.send ("User Already Exist!")
//         }

//         //creating new user
//         const newUser = await UserModel.create(req.body)
//         res.send(newUser)
//     }catch(error){
//         console.log(error);
//         res.send(403).send("Cannot Create/POST")
//     }
// })


//GET user by ID
router.get("/:id", async (req,res)=>{
    try{
    const user = await UserModel.findById(req.params.id)
    res.send(user)
    } catch(error){
        console.log(error)
        res.send(403).send("Cannot Get User")
    }
})




//PUT (update) user by ID
router.put("/:id", async(req, res)=>{
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {"returnDocument" : "after"})
        res.send(updatedUser)
    }catch(error){
        console.log(error)
        res.status(403).send("Cannot PUT (update) User by ID")
    }
})

//DELETE user
router.delete("/:id", async (req,res)=>{
    try{
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser)
        res.send("User Deleted")
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot Delete")
    }
})


//export
module.exports = router;