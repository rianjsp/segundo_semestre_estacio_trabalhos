const banco = require('mongoose');
require('dotenv').config();

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const URI = process.env.MONGO_URI

banco.connect(URI, options)
    .then(() => {
        console.log('Conectado com o MongoDB')
    })
    .catch((e) => {
        console.error('Ocorreu um erro ao conectar com o MongoDB', e)
    });


module.exports = banco;