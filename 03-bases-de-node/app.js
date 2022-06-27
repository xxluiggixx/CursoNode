const argv = require('./config/yargs');
const {createTableFile} = require('./helpers/multiplicar');

const {base, list,hasta}=argv;

createTableFile(base, list, hasta)
    .then(createTableFile=>console.log(createTableFile,' creado'))
    .catch(err => console.error(err))
