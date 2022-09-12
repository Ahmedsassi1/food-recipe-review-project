
const {verifyPassword}=require ('../Token/hashing.js');
const {NewToken} =require('../Token/TokenCreation.js')
var user = require('../database-mongo/users.models.js');
const{hashPassword} =require( '../Token/hashing.js');



    const getAllUsers= function(req, res)  {

        selectAllu((err, results) => {
            if (err) { console.log(err) }
            res.json(results)
        })

    }
     const createNewUser = async function(req, res) {
        
        user.find({username:req.body.username}, (err, result) => {
            if (err) {
                console.log(err)
            }
            else if (result.length>0) {
                (res.status(400).send("User already exists"))
            }
            else {
                var newbody ={
                    username : req.body.username,
                     password: hashPassword ( req.body.password,10)
                }
                try {
                   
                    user.create(newbody, (err, results) => {
                        if (err) {
                            console.log(err)
                            res.sendStatus(409);
                        }
                        else {
                        res.status(201).send("user created")
                    }
                    })
                }
                catch (err) {
                    console.log(err)
                    res.status(409).send();
                }
            }
        })

    }
    const loggingIn= async function(req, res){
        user.find({username:req.body.username}, async (err, result) => {

            if (err) { console.log(err) }
            else if (!result.length>0) {
                res.send('Wrong username')
            }
            else {
                try {
                    const match = verifyPassword( req.body.password,result[0].password)
                    if (match) {
                        res.cookie('token',NewToken(req.body))

                        res.status(200).json({ result: "welcome back "})
                    }
                    else {
                        res.send("not allowed")
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        })
    }


module.exports = { getAllUsers,loggingIn,createNewUser};