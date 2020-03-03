import {Sequelize} from "sequelize-typescript"

export const sequlize = new Sequelize('pay_tracker_2', 'postgres', 'postgres', {
   host: 'localhost',
   dialect: 'postgres',
   models: [__dirname + '/models'] 
});