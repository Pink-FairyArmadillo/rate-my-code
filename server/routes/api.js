// Require Packages
const express = require('express');
const apiController = require('../controllers/apiController');

// Initializer our router
const router = express.Router();

/* Handle routes to the /api route */

// Handle POST request to /getTopic 
// Receive a topicID the req.body
// Use getTopic to retrieve the requested topicID and store in res.locals.topic
// Return the res.locals.topic as json data
app.post('/getTopic', apiController.getTopic, (req, res) => {
  if(!res.locals.topic) {
    res.status(200).json({message: 'No posts have been created'});
  }
  res.status(200).json(res.locals.topic);
});

// Handle POST request to /getPost
app.post('/getPost', apiController.getPost, apiController.getComments, (req, res) => {
    res.status(200).json(res.locals.getPost);
});

// Handle POST request to /createPost  
app.post('/createPost', apiController.createPost, (req, res) => {
  res.status(200).json(res.locals.createPost);
});

// Handle POST request to /editPost
app.post('/editPost', apiController.editPost, (req, res) => {
  res.status(200).json(res.locals.editPost);
});


// Handle POST request to /votes  
/* 
  Expected Format of req.body:
  {
    vote: 'upvote' or 'downvote'
    commentID: whatever the comment _id is 
    postID: whatever the post _id is 
  }
*/
app.post('/getVotes', apiController.getVotes, (req, res) => {
  res.status(200).json(res.locals.votes);
});

// Handle POST request to /createComment 
app.post('/createComment', apiController.createComment, (req, res) => {
  res.status(200).json(res.locals.createComment);
});

// Handle DELETE request to /deleteComment  
// Handle PATCH request to /editComment  

// export as router
module.exports = router;