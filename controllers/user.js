const express = require('express');
const user = express.Router();
const db = require('../config/user.database');
const jwt = require('jsonwebtoken');

const getuser = async (req, res) => {
    const query = await db.query("SELECT * FROM user");
    return res.status(200).json({code: 200, message: query});
}

const postUser = async (req, res) => {
    const { user_name, user_mail, user_password } = req.body;
    if (user_name && user_mail && user_password ){
        let query = "INSERT INTO user(user_name, user_mail, user_password)"
        query += ` VALUES('${user_name}', '${user_mail}', '${user_password}')`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario insertado correctamente"})
        }
        
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }

    return res.status(500).json({code: 500, message: "Campos inconpletos"})
}

const getoneuser = async (req, res) => {
    const { user_name } = req.body;
    if (user_name) {
        const query = await db.query(`SELECT * FROM user WHERE user_name = '${user_name}'`);
        return res.status(200).json({code: 200, message: query})
    }
    return res.status(404).json({code:404, message: "Usuario no encontrado"})
}

const deleteUser = async (req, res) => {
    const { user_id } = req.body;
    if(user_id){
        const query = `DELETE FROM user WHERE user_id = ${user_id}`;
        const rows = await db.query(query);
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Usuario eliminado correctamente"});
        }
        return res.status(404).json({code: 404, message: "Usuario no encontrado"});
    }
    return res.status(500).json({code: 200, message: "Error del servidor"});
    
    
}

const userPatch = async (req, res) => {
    const { user_id, user_name, user_mail } = req.body;
    if(user_id && user_name && user_mail){
        let query = `UPDATE user SET user_name = '${user_name}', user_mail='${user_mail}' WHERE user_id = ${user_id}`;

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