// TODO: import DB models
const db = require('../models/models');

const apiController = {};

apiController.getTopic = (req, res, next) => {
  const { topic } = req.body.topic; 

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
  const { id } = req.body.post; 

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

    res.locals.getPost = [dbResponse.rows[0]];
    return next();
  })
};

apiController.getComments = (req, res, next) => {
  const { id } = req.body.topic;

  // get comments from comments table using foreign key of correct post
  const query = {
    text: `
      SELECT * 
      FROM comments
      LEFT JOIN posts
      WHERE comments.post_id = posts.$1
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

    res.locals.post.push(dbResponse.rows[0]);
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

    res.locals.createPost = dbResponse.rows[0];
    return next();
  })
};

apiController.editPost = (req, res, next) => {
    const { 
        id,
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
      } = req.body.editPost;
  
    const query = {
      text: `
        UPDATE posts
        SET 
          topic = $1,
          date = $2,
          upvotes = $3,
          downvotes = $4,
          title = $5,
          issue = $6,
          tried = $7,
          cause = $8,
          code = $9,
        WHERE id = $10
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
        id
      ]
    }
  
    db.query(query.text, query.params, (err, dbResponse) => {
      if(err) {
        next({
          log: 'ERROR: apiController.editPost',
          message: { err: err.message }
        });
      }

      res.locals.editPost = dbResponse.rows[0];
      return next();
    })
};

apiController.getVotes = (req, res, next) => {
 //
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

    res.locals.createComment = dbResponse.rows[0];
    return next();
  })
};