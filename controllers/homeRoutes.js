const router = require('express').Router();
const sequelize = require('../config/connection');
const path = require('path');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
          ],
        order: [[ 'created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log('Rendering homepage view:', path.join(__dirname, 'views', 'homepage'));
      res.render('partials/homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('post-info', {
            post,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;