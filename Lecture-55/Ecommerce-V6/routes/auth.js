
const express =  require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();

router.get('/register', (req,res)=>{
    res.render('auth/signup')
})

router.post('/register', async(req,res)=>{
    let {username, password , email,role, gender} = req.body;
    let user = new User({username, email,role, gender});
    let newUser = await User.register(user,password);
    // console.log('user saved', newUser);
    // res.send(newUser);
    res.redirect('/login');
})

router.get('/login', (req,res)=>{
    res.render('auth/login')
})

router.post('/login', 
    passport.authenticate('local',
         { failureRedirect: '/login',
            failureMessage:true
          }),
    function(req, res) {
        // console.log(req.user, "User");
        req.flash('success',`Welcome Back ${req.user.username}`);
      res.redirect('/products');
    });

    router.get('/logout', (req,res)=>{
        req.logout(()=>{
            req.flash('success','Logged Out Successfully');
            res.redirect('/login');
        });
    })

module.exports = router;
