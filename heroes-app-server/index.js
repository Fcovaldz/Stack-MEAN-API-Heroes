/**  **/ 
require('./database.js')

/** Imports  **/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// adjuntando rutas al server
//equire("./route/routing")(app);
const router = require("./");

var corsOptions = {
    origin: "http://localhost:8080"
}
/* Iniciación de web server */ 

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(morgan("dev"));
app.use('/',router);

const db = require("./model/heroes.model");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Conectado a la Base de Datos");
}).catch(err => {
    console.log("No se pudo establecer la conexión a la Base de Datos");
    process.exit();
});



app.get("/", (req,res) =>{
    res.json({ message: "Inicio a servidor de aplicación"});
});



app.listen(port, () =>{
    console.log(`Servidor corriendo en puerto: ${port}`);
});