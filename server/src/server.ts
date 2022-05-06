import express from 'express'
import { routes } from './routes'

const app = express();

app.use(express.json()) //informa que vai receber json
app.use(routes) // importa routes de routes.ts



app.listen(3333, () => {
    console.log('HTTP server running!')
})

