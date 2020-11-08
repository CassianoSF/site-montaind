const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

// Credenciais da conta utilizada para disparar emails 
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'montaind.comercial@gmail.com',
        pass: 'montaind2020'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        // Email a ser enviado 
        const mailOptions = {
            from: 'Montaind Orçamentos <montaind.comercial@gmail.com>',
            to: 'montaind.comercial@gmail.com',
            subject: 'Orçamento de ' + req.body.nome,
            html: `<p style="font-size: 16px;">${JSON.stringify(req.body)}</p>`
        };
        
        // Envia email 
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Enviado');
        });
    });    
});