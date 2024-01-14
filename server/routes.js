const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('./model');

router.route('/signup')
    .post(async function(req,res){
        try {
            const { username ,password } = req.body;
            console.log(req.body);
            const user = new User({username});
            await User.register(user, password);
            return {success: true};
          } 
          catch (e) {
            console.log(e);
            return {success: false}
          }
    });

router.route('/login')
.post(async function(req,res){
    try {
        const { username ,password } = req.body;
        console.log(req.body);
        const user = new User({username});
        await User.register(user, password);
        return {success: true};
      } 
      catch (e) {
        console.log(e);
        return {success: false}
      }
});


module.exports = router;