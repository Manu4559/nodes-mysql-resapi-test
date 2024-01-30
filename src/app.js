import express from 'express'
import employeesRoutes from './router/employees.routes.js'
import indexRoutes from './router/index.routes.js'
const app = express()


//Middlewares
app.use(express.json())
app.use('/api',employeesRoutes)
app.use(indexRoutes)
app.use((req, res, next) => {
    res.status(404).json({message: 'endpoint not found'})
})

export default app
