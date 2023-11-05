const jwt = require('jsonwebtoken')

const authenticateToken=(req, res, next)=>{
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.SECRET_KEY); //return the verified user if token matches
        req.user = user;
        next();
    }catch(e){
        res.clearCookie("token")
        return res.redirect('/login')
    }
}


module.exports = authenticateToken;