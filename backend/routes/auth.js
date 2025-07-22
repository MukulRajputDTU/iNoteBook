const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

const JWT_SECRET = "HELLOWORLD";

// Create a user using: POST "/api/auth". Doesn't require authentication
router.post('/createUser', [
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5})
] ,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        let success = false;
        const email = req.body.email;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success, error: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        user.save();
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken});
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error.")
    }
})

// Authenticate a user
router.post('/login', [
    body('email','Enter a valid email').isEmail(),
    body('password','Password can not be blank').exists(),
] ,async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    const {email,password} = req.body;
    try {
        let success = false;
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials."})
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare) {
            return res.status(400).json({success, error: "Please try to login with correct credentials."})
        }
        const payload = {
            user:{
                id: user.id,
            }
        }
        const authtoken = jwt.sign(payload,JWT_SECRET);
        success = true;
        res.json({success, authtoken}); 
    } catch(err) {
        console.error(err);
        res.status(500).send("Internal Server Error.");
    }
})

// Get loggedIn User Details
router.post('/getuser', fetchUser, async (req,res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error.");
    }
})

module.exports = router;