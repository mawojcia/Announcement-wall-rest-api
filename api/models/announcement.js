const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId, //serial ID, string
    type: String,
    name: String,
    price: Number
});

module.exports = mongoose.model('Announcement', announcementSchema);