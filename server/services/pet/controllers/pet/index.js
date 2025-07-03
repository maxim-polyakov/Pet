import { Pets } from '../../models/pets.js';
import amqp from 'amqplib';

class Url {
    //  Проверка токена авторизации.
    async pet(req, res, next) {
        try {
            const { id } = req.body;
            const result = await Pets.findOne({ where: { id:id }});
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async pets(req, res, next) {
        try {
            const result = await Pets.findAll()
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async create_pet(req, res, next) {
        try {
            const { name, age, hungry, mood, status, health} = req.body;
            const createResult = await Pets.create({
                name: name,
                age: age,
                health: health,
                hungry: hungry,
                mood: mood,
                status: status
            });
            return res.json(createResult);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    async feed(req, res, next) {
        try {
            const { id } = req.body;

            const result = await Pets.findOne({ where: { id:id }});
            let hungry = result.hungry - 30;
            let mood = result.mood + 10;
            const createResult = await result.update({
                hungry: hungry,
                mood: mood
            });
            await createResult.save()
            return res.json(createResult);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    async play(req, res, next) {
        try {
            const { id } = req.body;

            const result = await Pets.findOne({ where: { id:id }});
            let hungry = result.hungry + 5;
            let mood = result.mood + 15;
            const createResult = await result.update({
                hungry: hungry,
                mood: mood
            });
            await createResult.save()
            return res.json(createResult);

        } catch (error) {
            res.status(500).send(error);
        }
    }
    async heal(req, res, next) {
        try {
            const { id } = req.body;

            const result = await Pets.findOne({ where: { id:id }});
            let hungry = result.hungry - 10;
            let health = result.health + 20;
            const createResult = await result.update({
                health: health,
                hungry: hungry
            });
            await createResult.save()
            return res.json(createResult);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    async push(req, res, next) {
        try {
            const { id } = req.body;

            const result = await Pets.findAll();
            const queue = 'pets';

            amqp.connect('amqp://rabbitmq:5672', (err,conn) => {
                conn.createChannel((err,ch) => {
                    ch.assertQueue(queue, { durable: false });
                    ch.sendToQueue(queue, Buffer.from(JSON.stringify(result)));
                })
            })
            return res.json(result);
        } catch (error) {
            res.status(500).send(error);
            return res.json(error)
        }
    }

}

export default new Url();