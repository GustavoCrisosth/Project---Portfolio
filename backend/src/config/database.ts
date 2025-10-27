import { Sequelize, Dialect } from 'sequelize';

const dbName = process.env.DB_NAME || 'portfolio_db';
const dbUser = process.env.DB_USER || 'gustavo';
const dbPass = process.env.DB_PASS || 'gustavopass';
const dbHost = process.env.DB_HOST || 'localhost';
const dbDialect = 'mysql' as Dialect;

const useSsl = (dbHost !== 'localhost' && dbHost !== 'db');

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql',
    dialectOptions: {

        ...(useSsl ? {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        } : {})
    }
});

export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log(`[database]: Conexão com o MySQL em '${dbHost}' estabelecida.`);
    } catch (error) {
        console.error(`[database]: Não foi possível conectar ao MySQL em '${dbHost}':`, error);
    }
};

export default sequelize;