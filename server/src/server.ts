import express from 'express'
import { prisma } from './prisma';

const app = express();

app.use(express.json())

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot} = req.body

    const feedback = await prisma.feedback.create({
        data:{
            type,
            comment,
            screenshot,
        }
        
    })
    
    
    // console.log(req.body)

    return res.status(201).json({data: feedback})
})


app.listen(3333, () => {
    console.log('HTTP server running!')
})


/***
 *  GET - buscar informações
 *  POST - cadastrar informações
 *  PUT - atualizar informações de uma entidade inteira (todos os campos)
 *  PATCH - atualizar informações unica de uma enditade (algo especifico)
 *  DELETE - deletar uma informação
 * 







 */