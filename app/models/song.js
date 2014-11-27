// app/models/song.js
var mongoose = require('mongoose');

module.exports = mongoose.model('Song', {
    author: {type : String, default: ''},
    title:  {type : String, default: ''},
    lyrics: {type : String, default: ''}
}, 'repertoire');
