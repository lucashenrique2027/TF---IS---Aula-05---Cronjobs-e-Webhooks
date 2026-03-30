// app/Commands/SyncCommand.js
module.exports = () => {
    console.log("sync executado");
};
// command.js (Simplificado)
const command = process.argv[2];
const sync = require('./app/Commands/SyncCommand');

if (command === 'sync') {
    sync();
} else {
    console.log("Comando não encontrado.");
}