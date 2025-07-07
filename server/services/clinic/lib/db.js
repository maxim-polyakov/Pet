import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

//  Объект для работы с БД, экземпляр класса sequelize.
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        schema: process.env.DB_SCHEMA,
        define: {
            timestamps: true,
            freezeTableName: true,
        },
        dialectOptions: {},
        timezone: '+3:00'
    },
);

export default db;