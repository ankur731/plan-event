const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next)=>{
    const token = req.cookies.newToken;
    
    try {
        const vendor = jwt.verify(token, process.env.SECRET_KEY); //return the verified user if token matches
        req.vendor = vendor;
        next();
    }catch(e){
        res.clearCookie("newToken")
        return res.redirect('/login')
    }
}

                                
module.exports = authenticateToken;