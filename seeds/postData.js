const { Post } = require('../models');

    const postData = [
      {
        title: "Best Football Team",
        post_text:
          "Are the Kansas City Chiefs a dynasty?",
        user_id: 1,
      },
      {
        title: "Importance of defining global vs local variables",
        post_text: "Allows variables to be defined in a global or local sense for functionality use",
        user_id: 1,
      },
      {
        title: "What is the function of seeds?",
        post_text:
          "To insert data into the schema to be utilized for application",
        user_id: 4,
      },
      {
        title: "Biggest difference between relational and norelational databases?",
        post_text:
          "Non relational are non uniform and well suited to deal with larger amounts of data and users in a larger application.",
        user_id: 5,
      },
    ];
    
    const seedPosts = () => Post.bulkCreate(postData);
    
    module.exports = seedPosts;
