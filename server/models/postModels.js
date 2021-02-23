const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true},
    writtenContent: { type: String, required: true},
    createdAt: { type: Date, default: new Date()},
    tags: {type:[String]},
    selectedFile: { type: String, required: true},
    likeCount: { type: Number, default: 0},
})

module.exports = mongoose.model('post', postSchema)