require('dotenv').config()

const express = require('express'); 
const app = express(); 
const path = require('path')
const ejs = require('ejs'); 
const { join } = require('path');
const PORT = process.env.PORT
const ejsMate = require('ejs-mate')
const session = require('express-session');
const passport = require('passport'); 
const LocalStrategy = require('passport-local'); 
const methodOverride = require('method-override')
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname,"views")); 
app.engine('ejs', ejsMate); 


sessionConfig = {
    secret:"This suppose to be a good secret", 
    resave:false, 
    saveUnitialized:true, 
    cookie:{
        secure:true 
    }
}


app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true})); 
app.use(methodOverride("_method"))
app.use(express.json())
app.use(session(sessionConfig)); 
app.use(passport.initialize());


/**setting passport local strategy */
// passport.use(new LocalStrategy(user.authenticate()))
// passport.serializeUser(user.serializeUser())
// passport.deserializeUser(user.deserializeUser())

app.get('/', function(req,res){
    res.send("This is DAB DRT home page"); 
})

app.listen(PORT, function(req,res){
    console.log(`listening on port ${PORT}`);
})