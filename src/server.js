import express from 'express';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.static('/public'));

const router = express.Router();
import path from './routes/index.routes.js';
path(router);

server.use('/', router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server is running on port ${PORT}.`);
});