 const mongoose = require('mongoose');
 
 
 const deviceSchema = new mongoose.Schema({
	deviceId : String,
	data : String ,
	timestamp :{ 
		type: Date, 
		default : Date.now
	}
 });
 // Create and export model

const DeviceData = mongoose.model('DeviceData', deviceSchema);

module.exports = DeviceData;