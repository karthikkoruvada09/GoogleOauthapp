const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./auth');
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');
    const cors=require('cors');

    const corsOption={
        origin:"http://localhost:4200"
    }
    app.use(cors(corsOption));

    app.use(cookieSession({
        name: 'session',
        keys: ['123']
    }));
    app.use(cookieParser());


auth(passport);
app.use(passport.initialize());


app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});



app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        });
    }
});



app.get('/setUrl',(req,res)=>{

    res.send({url:"http://localhost:4000/auth/google"})
})
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/redirect',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
      //  console.log(req.user)

        req.session.token = req.user.token;
        res.redirect('http://localhost:4200'); 

    }
);
app.listen(4000, () => {
    console.log('Server is running on port 3000');
});





