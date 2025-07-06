//  Учебная МИС ПИМУ.
//  Точка входа в серверную часть приложения.

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './lib/db.js';
//  Подключение этого файла лишь для того, чтобы все модели были созданы при запуске, если они не были созданы ранее.
import './models/index.js';

import apiRouter from './routes/index.js';



const ServerPort = process.env.SERVER_PORT ?? 5002;

//  Инициализация expressjs.
const app = express();
app.use(cors());
app.use(express.json());

//  Пути, которые будет обрабатывать express.
app.use('/api', apiRouter);

const listeningListener = () => {
    console.log(`Server is running. Port: ${ServerPort}`);
};

//  Функция, которая запустит сервер и БД.
const start = async () => {
    try
    {
        await db.authenticate();
        await db.sync()
        app.listen(ServerPort, listeningListener);
    }catch (error)
    {
        console.error(error);
    }
};

start();