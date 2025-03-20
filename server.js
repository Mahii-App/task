const express = require('express');// importing module 
const mongoose = require('mongoose');
/// init express app 

const app = express();
const port = 3000;



// const requestLogger = require('./middleware/requestLogger'); // middleware importing 
// const auth = require('./middleware/auth'); //  auth import path
// const DeviceData = require('./schema'); // importing  model



const requestLogger = require('./middleware/requestlogger'); // middleware importing (fixed: requestLogger to requestlogger)
const auth = require('./middleware/auth'); //  auth import path
const DeviceData = require('./schema');
//Middleware to parse JSON request 

app.use(express.json());
 

app.use(requestLogger);
app.use(auth);


//connect to mongodb running on server side 

mongoose.connect('mongodb://localhost:27017/device',{
 useNewUrlParser : true, //  allow users to fall back to the old parser if they find a bug in the new parser.

 useUnifiedTopology: true  // e MongoDB driver will try to find a server to send any given operation to, and keep retrying for serverSelectionTimeoutMS milliseconds

	})
 .then(() => console.log('server connected to mongodb'))
 .catch(err => console.error('mongo connection error :',err));


 app.post('/data', auth, async (req, res,next) => {
    //  producted by auth
    try {
        const newData = new DeviceData({
            deviceId: req.body.deviceId,  // client ID from request 
            data: req.body.data          // Data payload from client
        });
        const savedData = await newData.save();  // Save to MongoDB
        res.status(201).json(savedData);        // Respond with saved data
    } catch (err) {
        next(err);  // Pass errors to error handler
    }
});


// Middleware 4: Handle 404 for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Middleware 5: Global error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});
// Start the server
app.listen(port, () => {
    console.log(`Server device listening on port ${port}`);
});
 
