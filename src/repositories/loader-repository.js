'use strict'

const mongoose = require('mongoose');
const Loader = mongoose.model('Loader');

exports.getByChave = async (chaveloader) => {
    const loader = await Loader.findOne({ chaveloader: chaveloader}); 
    return loader;
}

exports.create = async (data) => {
    var loader = new Loader(data);
    await loader.save();
}