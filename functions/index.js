const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Credenciais da conta utilizada para disparar emails 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'montaind.comercial@gmail.com',
    pass: 'montaind2020'
  }
});

app.use((req, res) => {
  // Email a ser enviado 
  const mailOptions = {
    from: 'Montaind Orçamentos <montaind.comercial@gmail.com>',
    to: 'montaind.comercial@gmail.com',
    subject: 'Orçamento de teste' + req.body.nome,
    html: `<p style="font-size: 16px;">${JSON.stringify(req.body)}</p>`
  };
  
  console.log("body", req.body)
  console.log("params", req.params)
  console.log("query", req.query)

  // Envia email 
  return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      return res.send(erro.toString());
    }
    return res.send('Enviado');
  });
});

admin.initializeApp();

exports.sendMail = functions.https.onRequest(app);