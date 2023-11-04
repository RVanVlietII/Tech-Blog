const router = require('express').Router();
const Comment = require('./commentRoutes');
const Post = require('./postRoutes');
const User = require('./userRoutes');

router.use('/comments', Comment);
router.use('/posts', Post);
router.use('/user', User);

module.exports = router;