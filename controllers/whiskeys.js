const express = require('express');
const Whiskey = require('../models/whiskeySchema')
const router = express(); 


// ////////////////////////////
// ROUTES
// Test Route 
router.get("/", (req, res) => {
    res.send("Hello World")
}); 



// //seed
// router.get("/seed", (req, res) => {
//     Whiskey.deleteMany({}, (error, allProducts) => {});
//     Whiskey.create(whiskeyData, 
    
//     (error, data) => {
//         res.redirect('/')
//     }    
//     )
// });

//index
router.get("/all", async (req, res) => {
    try {
        //send all whiskeys
        res.json(await Whiskey.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
});
// router.get("/bourbon", async (req, res) => {
//     try {
//         //send all whiskeys
//         res.json(await Whiskey.find({}));
//     } catch (error) {
//         //send error
//         res.status(400).json(error)
//     }
// });

//new 
router.post("/whiskey", async (req, res) => {
    try {
        //send all whiskeys
        res.json(await Whiskey.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
});


//delete

//edit 

//update 
router.put("/whiskey/:id", async (req, res) => {
    try {
        //send all whiskey
        res.json(
            await Whiskey.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new : true })
        );
        } catch (error) {
            //send error 
            res.status(400).json(error);
        }
    });

// show 


module.exports=router;