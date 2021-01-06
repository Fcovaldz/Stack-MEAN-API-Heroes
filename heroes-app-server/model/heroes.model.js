  
/***** MODEL *******/ 

const dbConfig = require("./db.config");
const mongoose = require('mongoose');


const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

var heroesSchema = new mongoose.Schema({
  
    nombre: String,
    bio: String,
    img: String,
    aparicion: String,
    casa: String,
    activo: Boolean
}, {
    timestamps: true,
    versionKey: false
});

db.Heroes = mongoose.model('heroes',heroesSchema,'Heroes');

module.exports = model("Heroes", heroesSchema);