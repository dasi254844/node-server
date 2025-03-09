export function checkUser(req, res, next) {
    let token = req.headers.tn;
    if(!token)
    return res.status(401).json({title: "ראשית בצע כניסה", message: "unauthorized"})

    try{
        let result = jwt.verify(token, process.env.SECRET_KEY);
        req.user = result;
        next()
    }
    catch(err){
        return res.status(401).json({title: "ראשית בצע כניסה", message: "unauthorized"+err.message})
    }
}

