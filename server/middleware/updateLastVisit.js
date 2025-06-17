import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


//  Middleware для обновления даты последнего посещения у пользователя.
export default async function (req, res, next) {
    if (req.method === 'OPTIONS')
        next();

    try
    {
        next();
    }catch (error)
    {
        res.status(200);

        next();
    }
}