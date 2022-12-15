const express = require('express');
const user = express.Router();
const db = require('../config/user.database');
const jwt = require('jsonwebtoken');

const getuser = async (req, res) => {
    const query = await db.query("SELECT * FROM empleados");
    return res.status(200).json({code: 200, message: query});
}

const postUser = async (req, res) => {
    const { correo_electronico, empleado_nombre, empleado_apellido, empleado_telefono, empleado_direccion } = req.body;
    if (correo_electronico && empleado_nombre && empleado_apellido && empleado_telefono && empleado_direccion ){
        let query = "INSERT INTO empleados(correo_electronico, empleado_nombre, empleado_apellido, empleado_telefono, empleado_direccion)"
        query += ` VALUES('${correo_electronico}', '${empleado_nombre}', '${empleado_apellido}', '${empleado_telefono}', '${empleado_direccion}')`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario insertado correctamente"})
        }
        
        return res.status(200).json({code: 200, message: "Ocurrio un error"});
    }

    return res.status(200).json({code: 200, message: "Campos inconpletos"})
}

const getoneuser = async (req, res) => {
    const { empleado_id } = req.body;
    if (empleado_id) {
        const query = await db.query(`SELECT * FROM empleados WHERE empleado_id = ${empleado_id}`);
        return res.status(200).json({code: 200, message: query})
    }
    return res.status(404).json({code:404, message: "Usuario no encontrado"})
}

const deleteUser = async (req, res) => {
    const { empleado_id } = req.body;
    if(empleado_id){
        const query = `DELETE FROM empleados WHERE empleado_id = ${empleado_id}`;
        const rows = await db.query(query);
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario eliminado correctamente"});
        }
        return res.status(404).json({code: 404, message: "Usuario no encontrado"});
    }
    return res.status(500).json({code: 200, message: "Error del servidor"});
    
    
}

const userPatch = async (req, res) => {
    const { empleado_id, correo_electronico, empleado_nombre, empleado_apellido, empleado_telefono, empleado_direccion } = req.body;
    if (correo_electronico && empleado_nombre && empleado_apellido && empleado_telefono && empleado_direccion ){
        let query = `UPDATE empleados SET correo_electronico = '${correo_electronico}', empleado_nombre = '${empleado_nombre}', empleado_apellido = '${empleado_apellido}', empleado_telefono = '${empleado_telefono}', empleado_direccion = '${empleado_direccion}'  WHERE empleado_id = ${empleado_id}`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1){
            return res.status(200).json({code:200, message: "Usuario cambiado"});
        }
        return res.status(200).json({code: 500, message: "Ocurrio un error"})
    }
    return res.status(200).json({code: 500, message: "campos incompletos"})
}


module.exports = {
    getuser,
    postUser,
    getoneuser,
    deleteUser,
    userPatch
}