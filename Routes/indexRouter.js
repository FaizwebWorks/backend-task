const express = require("express");
const router = express.Router();

const middleware = (req, res, next) => {
    if(req.headers.token === "abc") {
        next();
    }
    else {
        res.status(401).json({error: "Invalid token"})
    }
}

router.get("/", (req, res) => {
    res.status(200).json({message: "Welcome"})
})

router.get("/middleware", middleware, (req, res) => {
    res.status(200).json({message: "Middleware passed"})
})



module.exports = router;