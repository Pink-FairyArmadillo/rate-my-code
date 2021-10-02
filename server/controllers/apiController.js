// TODO: import DB models

const apiController = {};

apiController.getTopic = (req, res, next) => {
  const { topicID } = req.body.topic; 

  const query = {
    text: `
      SELECT *
      FROM posts
      WHERE topic = $1
    `,
    params: [topicID]
  };

  db.query(query.text, query.params, (err, dbResponse) => {
    if(err) {
      next({
        log: 'ERROR: apiController.getTopioc',
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
    text: '',
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
      title, 
      issue, 
      tried, 
      cause, 
      code, 
      topic,  
      date,
      user,
      upvotes,
      downvotes
    } = req.body.createPost;

  const query = {
    text: `
      INSERT INTO posts (
        title,
        issue,
        tried, 
        cause,
        code,
        topic,
        date,
        user,
        upvotes,
        downvotes
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 0, 0)
    `,
    params: [
      title, 
      issue, 
      tried, 
      cause, 
      code, 
      topic,  
      date,
      user,
      upvotes,
      downvotes
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
        title, 
        issue, 
        tried, 
        cause, 
        code, 
        topic,  
        date,
        user,
        upvotes,
        downvotes,
        id
      } = req.body.editPost;
  
    const query = {
      text: `
        UPDATE posts
        SET 
          title = $1,
          issue = $2,
          tried = $3, 
          cause, = $4
          code = $5,
          topic = $6,
          date = $7,
          user = $8,
          upvotes = $9,
          downvotes = $10
        WHERE id = $11
      `,
      params: [
        title, 
        issue, 
        tried, 
        cause, 
        code, 
        topic,  
        date,
        user,
        upvotes,
        downvotes,
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

};

apiController.createComment = (req, res, next) => {
  const { 
    comment,
    code,
    upvotes,
    downvotes,
    date,
    post,
    user
  } = req.body.createComment;
  
  const query = {
    text: `
      INSERT INTO comments (
        comment,
        code,
        upvotes,
        downvotes,
        date,
        post,
        user
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    params: [
      comment,
      code,
      upvotes,
      downvotes,
      date,
      post,
      user
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