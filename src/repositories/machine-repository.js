'use strict'

const mongoose = require('mongoose');
const Machine = mongoose.model('Machine');

exports.getByChave = async (chavemachine) => {
    const machine = await Machine.findOne({
        chave: chavemachine
    });
    return machine;
}

exports.create = async(data) => {
    var machine = new Machine(data);
    await machine.save();
}