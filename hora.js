const express = require ('express')
const router = express.Router()
const app = express()


app.use(express.json())
const PORTA = 4444
function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
   }

function mostraPorta() {
    console.log('Servidor Criado e rodando na Porta ' [PORTA])
}
app.use(router.get('/hora', mostraHora))
app.listen(PORTA, mostraPorta)