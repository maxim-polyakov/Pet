import { DataTypes, fn } from "sequelize";
import db from "../lib/db.js";

//  Описывает способ авторизации - какого-то поставщика данных для авторизации, которым система может доверять.
export const Clinic = db.define('clinic', {
    id: {
        type: DataTypes.UUID, primaryKey: true, defaultValue: fn('gen_random_uuid')
    },
    //  Адрес для перехода (редиректа).
    name: {
        type: DataTypes.TEXT, allowNull: false
    },
    age: {
        type: DataTypes.FLOAT, allowNull: false
    },
    health: {
        type: DataTypes.FLOAT, allowNull: false
    },
    hungry: {
        type: DataTypes.FLOAT, allowNull: false
    },
    mood: {
        type: DataTypes.FLOAT, allowNull: false
    },
    status: {
        type: DataTypes.TEXT, allowNull: false
    }

}, { timestamps: true, comment: 'Таблица с clinic' });