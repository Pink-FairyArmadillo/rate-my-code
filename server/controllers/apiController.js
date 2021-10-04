// TODO: import DB models
const db = require('../models/models');

const apiController = {};

apiController.getTopic = (req, res, next) => {
  const topic = req.params.topic; 

  const query = {
    text: `
      SELECT *
      FROM posts
      WHERE topic = $1
    `,
    params: [topic]
  };

  db.query(query.text, query.params, (err, dbResponse) => {
    if(err) {
      next({
        log: 'ERROR: apiController.getTopic',
        message: { err: err.message }
      });
    }

    res.locals.topic = dbResponse.rows[0];
    return next();
  })
};

apiController.getPost = (req, res, next) => {
  const id = req.params.post; 

  const query = {
    text: `
      SELECT *
      FROM posts
      WHERE id = $1
    `,
    params: [id]
  };
  
  db.query(query.text, query.params, (err, dbResponse) => {
    if(err) {
      next({
        log: 'ERROR: apiController.getPost',
        message: { err: err.message }
      });
    }

    res.locals.post.postContent = dbResponse.rows[0];
    return next();
  })
};

apiController.getComments = (req, res, next) => {
  const id = req.body.post;

  // get comments from comments table using foreign key of correct post
  const query = {
    text: `
      SELECT c.* 
      FROM comments c
      LEFT JOIN posts p
      ON c.post_id = p.$1
    `,
    params: [id]
  };

  db.query(query.text, query.params, (err, dbResponse) => {
    if(err) {
      next({
        log: 'ERROR: apiController.getComments',
        message: { err: err.message }
      });
    }

    res.locals.post.comments = dbResponse.rows[0];
    return next();
  })
};

apiController.createPost = (req, res, next) => {
  const { 
      topic,
      date,
      upvotes,
      downvotes,
      title,
      issue,
      tried,
      cause,
      code,
      user_id
    } = req.body.createPost;

  const query = {
    text: `
      INSERT INTO posts (
        topic,
        date,
        upvotes,
        downvotes,
        title,
        issue,
        tried,
        cause,
        code,
        user_id
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `,
    params: [
      topic,
      date,
      upvotes,
      downvotes,
      title,
      issue,
      tried,
      cause,
      code,
      user_id
    ]
  }

  db.query(query.text, query.params, (err, dbResponse) => {
    if(err) {
      next({
        log: 'ERROR: apiController.createPost',
        message: { err: err.message }
      });
    }

    res.locals.createdPost = dbResponse.rows[0];
    return next();
  })
};

apiController.editPost = (req, res, next) => {
    
    const { 
        _id,
        topic,
        date,
        upvotes,
        downvotes,
        title,
        issue,
        tried,
        cause,
        code
      } = req.body.editPost;
  
    const query = {
      text: `
        UPDATE posts
        SET 
          topic = $2,
          date = $3,
          upvotes = $4,
          downvotes = $5,
          title = $6,
          issue = $7,
          tried = $8,
          cause = $9,
          code = $10,
        WHERE _id = $1
      `,
      params: [
        _id,
        topic,
        date,
        upvotes,
        downvotes,
        title,
        issue,
        tried,
        cause,
        code
      ]
    }
  
    db.query(query.text, query.params, (err, dbResponse) => {
      if(err) {
        next({
          log: 'ERROR: apiController.editPost',
          message: { err: err.message }
        });
      }

      res.locals.editedPost = dbResponse.rows[0];
      return next();
    })
};

apiController.createComment = (req, res, next) => {
  const { 
    comment,
    code,
    upvotes,
    downvotes,
    date,
    post_id,
    user_id
  } = req.body.createComment;
  
  const query = {
    text: `
      INSERT INTO comments (
        comment,
        code,
        upvotes,
        downvotes,
        date,
        post_id,
        user_id
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    params: [
      comment,
      code,
      upvotes,
      downvotes,
      date,
      post_id,
      user_id
    ]
  }

  db.query(query.text, query.params, (err, dbResponse) => {
    if(err) {
      next({
        log: 'ERROR: apiController.createComment',
        message: { err: err.message }
      });
    }

    res.locals.createdComment = dbResponse.rows[0];
    return next();
  })
};