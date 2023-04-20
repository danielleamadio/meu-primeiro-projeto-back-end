const express = require ("express")
const router = express.Router()

const app = express()
const porta  = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Angela Davis',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fonline.pucrs.br%2Fblog%2Fpublic%2Fquem-e-angela-davis&psig=AOvVaw0VKIQHvwx2HccgksC0kMCM&ust=1681948311270000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID4wPHPtP4CFQAAAAAdAAAAABAD',
        minibio: 'filósofa, escritora, professora e ativista'

})
}

function mostraPorta(){
    console.log ("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)