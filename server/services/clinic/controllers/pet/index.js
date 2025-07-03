import { Pets } from '../../models/pets.js';
import Connection from 'rabbitmq-client'

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

    async feed(req, res, next) {
        try {
            const { id } = req.body;

            const result = await Pets.findOne({ where: { id:id }});
            let hungry = result.hungry - 300;
            let mood = result.mood + 100;
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
            let hungry = result.hungry + 0;
            let mood = result.mood + 150;
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

    async pop(req, res, next) {
        try {
            let message = "";
            const rabbit = new Connection('amqp://rabbitmq')
            const ch = await rabbit.acquire()

            await ch.queueDeclare({queue: 'pets', exclusive: true})

            await ch.basicConsume({queue: 'pets'}, (msg) => {
                console.log(msg)
                message = msg;
                // acknowledge receipt of the message
                ch.basicAck({deliveryTag: msg.deliveryTag})
            })
            await ch.close()
            await rabbit.close()
            return res.json(message);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new Url();