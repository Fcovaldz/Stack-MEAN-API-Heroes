/*  Controller */

import { Heroes } from "../model/heroes.model";
const heroes = Heroes;

//CREATE Operation 
export function create(req,res) {
    if(!req.body){
        req.status(400).send({ message : "El contenido de la petición no puede estar vacío"});
        return;
    }

    Hero.findOne().sort({ _id: -1}).then(data => {
        var aux = parseInt(data._id) + 1;
        
        // Crear heroe
        const Heros = new Heroe({
            _id: aux,
            nombre: req.body.nombre,
            bio: req.body.bio,
            img: req.body.img,
            aparicion: req.body.aparicion,
            casa: req.body.casa,
            activo: true
        });
        
        hero.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        });


    });
    
    
}

// Operaciones READ

export function findAll(re,res) {
    Heros.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        });
}

export function findOne(req,res) {
    const _id = req.params._id;

    Hero.findById(_id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `No se encontró elemento con id: ${_id}`});
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            throwError(res,err);
        });
}

export function findSome(req,res) {
    const termino = req.query.termino;
    var query = termino ? { nombre: { $regex: new RegExp(termino), $options: "i"}, activo: true } : {};

    Hero.find(query)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        })
}

export function findActive(req,res) {
    Hero.find({ activo: true})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        });
}

// Operaciones UPDATE

export function update(req,res) {
    if(!req.body){
        return res.status(400).send({
            message : "La petición no puede ser vacía"
        });
    }
    const _id = req.params._id;

    Hero.findByIdAndUpdate(_id,req.body, { useFindAndModify: false })
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `No se pudo actualizar al heroe con id: ${_id}`
            });
        }else{
            res.send({ message: "Heroe actualizado"});
        }
    })
    .catch(err => {
        throwError(res,err);
    });
}

// Operaciones DELETE

const _delete = (req, res) => {
    const _id = req.params._id;

    Hero.findByIdAndUpdate(_id, { activo: false }, { useFindAndModify: active }) //cuando lo encuentre cambia la propiedad activo
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se pudo actualizar el heroe con el id= ${_id}`
                });
            }
            else {
                res.send({ message: "Heroe removido" });
            }
        })
        .catch(err => {
            throwError(res, err);
        });
};
export { _delete as delete };

function throwError(res, err){
    res.status(500).send({
        message: err.message || "Ocurrió un error en el web server"
    });
}