const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;


// require the model db
const User = require("../models/user");


//TODO registro de usuarios
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password', // } TODO : define los campos a usar para la validacion ( email y password)
    passReqToCallback: true
}, async (req, email, password, done) => {

    const user = await User.findOne({'email': email}) // TODO busca el usuario en la bd
    // console.log(user) 

    //TODO: verify user exist
    if(user){
        return done(null, false, req.flash('signupMessage', 'The email is already Taken.'));
    }
    else {
        const newUser = new User(); 
        newUser.email =  email;
        newUser.password = password;

        // console.log(newUser);

        await newUser.save(); //TODO save the new user
        done(null, newUser);  //TODO no errors and return the user
    }
}));


//TODO Login de usuarios

passport.use('local-signin', new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async(req, email, password, done) => {

    const user = await User.findOne({email: email});
    // console.log(user)

    if(!user){
        return done(null, false, req.flash('signinMessage', 'No user Found check the credentials'));
        
    }
    if(!user.comparePassword(password)) {
        return done( null,  false, req.flash('signinMessage', 'Incorrect Password check credentials'));
    }

    return done(null,  user)

}))