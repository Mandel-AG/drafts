const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('ok c\'est connecté !'));

