const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  username: { type: String, required: true },
  price: { type: String, required: true },
  //tag: { type: String, required: true },
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;