const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Is Kansas City really a dynasty compared to what the Patriots were?",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "Seeds are nice way of separating data for visualization before importing into schema",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Non relational databases are easy to use",
    post_id: 1,
    user_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;