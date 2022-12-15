const express = require('express');
const db = require('../config/user.database');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    const { admin_mail, admin_password } = req.body;
    const query = `SELECT * FROM admon WHERE admin_mail = '${admin_mail}' AND admin_password = '${admin_password}'`;
    const rows = await db.query(query);
    
    if (admin_mail && admin_password){
        if(rows.length == 1){
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            }, "debugkey");
            return res.status(200).json({code: 200, message: token});
        }else{
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrectos"});
        }
    }
    return res.status(500).json({code: 500, message: "Datos incompletos"});
        
}



module.exports = {
    postLogin
}