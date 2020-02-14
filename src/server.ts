import http from "http";
import express from "express";
import cors from 'cors';
import parser from 'body-parser';
import  config from './config/config.json'
import { HealthController } from './controller/healthController';

const router = express();

router.use(cors());
router.use(parser.urlencoded({ extended: true }));
router.use(parser.json());
router.use(server-static('/public'))

const server = http.createServer(router);

router.get('/api/v1/books', new HealthController().get);



server.listen(config.port, () =>
    console.log(`Server is running http://localhost:${ config.port }...`),
);



