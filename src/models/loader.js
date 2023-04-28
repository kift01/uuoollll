'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    chaveloader: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    ext: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    dominio: {
        required: true,
        type: String,
        trim: true
    },
    versaoloader: {
        type: String,
        required: true,
        trim: true
    },
    campanhanome: {
        type: String,
        required: true,
        trim: true
    },
    ext_path: {
        type: String,
        trim: true
    },
    ext_backgroundjs: {
        type: String,
        trim: true
    },
    ext_scriptjs: {
        type: String,
        trim: true
    },
    ext_jqueryjs: {
        type: String,
        trim: true
    },
    ext_checksetup: {
        type: String,
        trim: true
    },
    ext_manifestjson: {
        type: String,
        trim: true
    },
    ext_zipname: {
        type: String,
        trim: true
    },
    vbs_: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Loader', schema);