const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next)=>{
    const token = req.cookies.jwt;
    try {
        const admin = jwt.verify(token, process.env.SECRET_KEY); //return the verified user if token matches
        req.admin = admin;
        next();
    }catch(e){
        res.clearCookie("jwt")
        return res.redirect('/login')
    }
}

                                
module.exports = authenticateToken;