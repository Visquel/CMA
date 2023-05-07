const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let clientSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  clientno: {
    type: Number
  },
  address: {
    type: Array
  }
}, {
    collection: 'clients'
  })

module.exports = mongoose.model('Client', clientSchema)