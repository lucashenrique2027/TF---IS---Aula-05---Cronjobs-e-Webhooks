const express = require('express');
const app = express();

// ADICIONE ESTA LINHA ABAIXO:
app.use(express.json()); 

app.post('/webhook/payment', (req, res) => {
    const { event } = req.body;
    if (event === 'payment.approved') {
        console.log(`Evento recebido: ${event}`);
        return res.status(200).send('OK');
    }
    res.status(400).send('Evento inválido');
});

app.listen(3000, () => console.log('Servidor rodando na 3000'));