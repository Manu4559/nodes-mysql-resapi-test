import {createPool} from 'mysql2/promise'
import config from './config.js'

export const pool = createPool({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    port: config.db_port,
    database: config.db_database
}) 