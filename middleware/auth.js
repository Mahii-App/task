//authentications 

const auth= (req,res,next)=>{
	const authHeader = req.headers['authorization'];
	if(authHeader == 'secret-token'){
		next();
	}
	else{
		res.status(401).json({error:'unauthorized'});
	
	}
 };
 module.exports = auth;