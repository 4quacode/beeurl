import express from 'express'
import urlRoutes from './routes/urlRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { connectDB } from './models/database/database.js'
import { configDotenv } from 'dotenv'

// Instalar ts-node-dev para que se pueda ejecutar el archivo de forma local
// para que se puedan probar las rutas
// pnpm install ts-node-dev --save-dev

const app = express()
connectDB()
app.use(express.json()) // middleware que transforma el req.body de la petición en un objeto json

app.get('/', (req, res) => {
  res.send('404 Not Found')
})

app.use('/api/url', urlRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.disable('x-powered-by')
const port = process.env.PORT ?? 5000
app.listen(port, () => {
  console.log(`server runing on port ${process.env.LOCALHOST_BACKEND}:${port}`)
})
