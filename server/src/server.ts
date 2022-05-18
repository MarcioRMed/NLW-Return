import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express();

app.use(cors())
app.use(express.json()) //informa que vai receber json
app.use(routes) // importa routes de routes.ts



app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!')
})

