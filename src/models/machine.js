'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const schema = new Schema({
    chave: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    chaveloader: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    pcnome: {
        type: String,
        trim: true
    },
    ext: {
        type: String
    },
    versaoloader: {
        type: String,
        trim: true
    },
    sistemaoperacional: {
        type: String,
        trim: true
    },
    widthscreen: {
        type: String,
        trim: true
    },
    ddi: {
        type: String,
        trim: true
    },
    pcmodelo: {
        type: String,
        trim: true
    },
    campanhanome: {
        type: String,
        required: true,
        trim: true
    },
    networks: {
        type: String,
        trim: true
    },
    setup_chrome: {
        type: Boolean,
        default : false
    },
    setup_download: {
        type: Boolean,
        default : false
    },
    setup_complete: {
        type: Boolean,
        default : false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Machine', schema);