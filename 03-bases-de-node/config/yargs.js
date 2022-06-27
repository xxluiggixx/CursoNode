const argv=require('yargs')
                .options({'b':{
                    alias:'base',
                    demandOption:true,
                    default:5,
                    describe:'Base del multiplicador',
                    type:'number'
                    },
                    'l':{
                        alias:'list',
                        demandOption:true,
                        default:false,
                        describe:'Print table operation',
                        type:'boolean'
                    },
                    'h':{
                        alias:'hasta',
                        default:10,
                        describe:'up to x',
                        type:'number'
                    }
                    
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;
module.exports= argv;