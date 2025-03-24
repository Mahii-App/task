const nodemailer = require("Nodemailer");
 
//
 const transportaion = nodemailer.createTransport ({  // email transportation  it configer a transport obj to send email
 service : "gmail", //service to be used as mail 

 // authentication 
auth :{
	user : "mahi.rajput@appinventiv.com",
	pass :  " App@@2025#"

} ,
 });
 // content define
// mailoptns decide who will send it and who will recive it and its content
const mailOptions= {
	from : '"Mahi Rajput"<mahi.rajput@appinventiv.com>',
	to : "mahirajput16622@gmail.com",
	bcc : "rec@ex.com",
	cc: "cc@example.com",
	 subject : " learning Nodemailer ",
	 text : " Hello , I am Mahi and i am learning Nodemailer ",
	 html :

}



