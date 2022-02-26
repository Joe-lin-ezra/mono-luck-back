const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.static(__dirname + '/public'));

require('./routes/index.routes')(server.router());

const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server is running on port ${PORT}.`);
});