import {config} from 'dotenv'
config()

export default {
    port : process.env.PORT || 3000,
    db_user : process.env.DB_USER,
    db_password : process.env.DB_PASSWORD,
    db_host : process.env.DB_HOST,
    db_port : process.env.DB_PORT,
    db_database : process.env.DB_DATABASE
}

