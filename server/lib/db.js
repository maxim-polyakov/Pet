import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

const env = dotenv.config()?.parsed;

//  Объект для работы с БД, экземпляр класса sequelize.
const db = new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: env.DB_HOST,
        port: env.DB_PORT,
        define: {
            timestamps: true,
            freezeTableName: true,
        },
        dialectOptions: {
            useUTC: false
        },
        timezone: '+3:00'
    },
);

export default db;