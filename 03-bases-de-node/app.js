//imprimit  la tabal de multiplicar('
const {createTableFile} = require('./helpers/multiplicar');
const argv=require('yargs')
            .option('b',{
                alias: 'base',
                default:5,
                describe:'Base del multiplicador',
                type:'number'

            })
            .argv;

const {base}=argv;

/*
Codigo viejo q no debería ser utilizado
console.log(process.argv);
const [,,arg3='base=5']=process.argv;
const[, base]=arg3.split('=');
console.log(base); */


createTableFile(base)
    .then(createTableFile=>console.log(createTableFile,' creado'))
    .catch(err => console.error(err))
