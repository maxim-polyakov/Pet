//  Учебная МИС ПИМУ.
//  Точка входа в серверную часть приложения.

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './lib/db.js';
import { Pets } from './models/pets.js';
//  Подключение этого файла лишь для того, чтобы все модели были созданы при запуске, если они не были созданы ранее.
import './models/index.js';

import apiRouter from './routes/index.js';


async function Timer() {
    const pets = await Pets.findAll();
    for (let i = 0; i < pets.length; i++) {

        const result = await Pets.findOne({ where: { id:pets[i].id }});
        let age = result.age + 1;
        let health = 0
        let status = 'alive'
        if (result.hungry > 70) {
            health = result.health - 5;
        } else {
            health = result.health - 2;
        }
        let hungry = result.hungry + 3;
        let mood = (result.health + (100 - result.hungry)) / 2;

        if (health > 30) {
            status = 'alive'
        } else if (health <= 30 && health > 0) {
            status = 'sick'
        } else if (health < 0 || hungry > 100) {
            status = 'dead'
        }


        const createResult = await result.update({
            age: age,
            health: health,
            hungry: hungry,
            mood: mood,
            status: status
        });
        await createResult.save()

    }
}

const ServerPort = process.env.SERVER_PORT ?? 5000;

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
            .then(async () => {
                setInterval(Timer, 100000);

            })
        app.listen(ServerPort, listeningListener);
    }catch (error)
    {
        console.error(error);
    }
};

start();