const express = require('express');
const { productRouter, salesRouter } = require('./routers/index');

const app = express();
app.use(express.json());

app.use('/products', productRouter);

app.use('/sales', salesRouter);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;