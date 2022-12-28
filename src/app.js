const express = require('express');
const app = express();
const login = require('./routes/login');
const signIn = require('./routes/signin');
const editar = require('./routes/editar');
const deletar = require('./routes/deletar');

app.use(express.json())

app.use('/',login);
app.use('/signin', signIn)
app.use('/edit', editar)
app.use('/deletar', deletar)

module.exports = app