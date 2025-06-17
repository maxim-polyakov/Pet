import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


//  Middleware для обновления даты последнего посещения у пользователя.
export default async function (req, res, next) {
    if (req.method === 'OPTIONS')
        next();

    try
    {
        let [ dummy, token ] = req.headers.authorization.split(' ');
        if (token == 'null')
            token = null;

        if (!token)
        {
            next();
            return;
        }

        const env = dotenv.config()?.parsed;
        const decoded = jwt.verify(token, env.JWT_SECRET);

        const candidate = await User.findByPk(decoded.id);
        if (!candidate)
            throw new Error('Пользователь не найден');

        //  Обновить дату последнего посещения пользователя.
        await candidate.changed('updatedAt', true).save();

        next();
    }catch (error)
    {
        res.status(200);

        next();
    }
}