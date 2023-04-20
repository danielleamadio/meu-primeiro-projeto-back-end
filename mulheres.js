const express = require ("express")
const router = express.Router()
const app = express()
const porta  = 3333

const mulheres = [
    {
        nome: 'Katherine Johnson',
        imagem: 'https://super.abril.com.br/wp-content/uploads/2018/08/katherine-johnson.png?w=1024&h=682&crop=1',
        minibio: 'matemática, física e cientista'
    } ,
    {
        nome: 'Danielle Amadio',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHhgUfLJ6xEJA/profile-displayphoto-shrink_800_800/0/1669119622535?e=2147483647&v=beta&t=qmX7ThfnxsOekT0rK7CKY4tj8RR95DDlzgwngbGtRwM',
        minibio: 'mãe, especialista em treinamento'
    },
    {
        nome: 'Meghan Markle',
        imagem: 'https://www.ofuxico.com.br/wp-content/uploads/2021/02/meghan-markle-2.jpg',
        minibio: 'duquesa, atriz, ativista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta(){
    console.log ("Servidor criado e rodando na porta ", porta)
}

mostraPorta()

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)