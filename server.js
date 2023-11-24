const express = require('express');
const app = express();
const cron = require('node-cron');
const routing = require('./routes');
const fs = require('fs');
require("dotenv").config();
const cors = require('cors')  

require('./db')

app.use(express.json());


fs.writeFile('./newfile.txt','tototo',(error) => {
  console.log('file created')
})


app.use(cors())
app.use(routing)


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});