import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import MainContainer from "../containers/MainContainer.jsx";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function CreatePost() {
  const [newPost, setNewPost] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const titleInputRef = useRef();
  const topicInputRef = useRef();
  const descriptionInputRef = useRef();
  const codeInputRef = useRef();

  function submitCode () {
    const enteredTitle = titleInputRef.current.value;
    const enteredTopic = topicInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCode = codeInputRef.current.value;
    const createdPost = {
      topic: enteredTopic,
      date: Date.now(),
      upvotes: 0,
      downvotes: 0,
      title: enteredTitle,
      issue: null,
      tried: null,
      cause: null,
      description: enteredDescription,
      code: enteredCode,
      userId: null, // use cookie data to input user ID
    };

    // create fetch request to POST the new post
    fetch('/api/createPost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' //not sure about what needs to go here
      },
      body: JSON.stringify(createdPost)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setNewPost(data);
          setSubmitted(true);
        }
      })
      .catch((err) => console.log('POST REQUEST ERROR: ', err));
  }

    //redirect if login is verified or successfully signedup

    if (submitted) {
      return (
        <Redirect
          to={{
            pathname: '/feed',
          }}
        />
      );
    }

  // drop down selector for topic
  const dropDownMenu = (
    <div>
      <h4 name="choose-topic">Choose A Topic:</h4>
      <select name="topic-menu" id="topic-menu">
        <option value="=javacript">JavaScript</option>
        <option value="python">Python</option>
        <option value="c-sharp">C#</option>
        <option value="c-plus-plus">C++</option>
        <option value="java">Java</option>
        <option value="php">PHP</option>
      </select>
    </div>
  );

  // remove MainContainer when we implement React Router
  return (
    <div>
      <div><HighlightOffIcon id="cancel-post"/></div>
      <div>
        <TextField id="title" label="Title" variant="outlined" ref={titleInputRef}/>
      </div>
        <div>
          {dropDownMenu}
        </div>
      <div>
        <TextField id="description" label="Description" variant="outlined" ref={descriptionInputRef}/>
      </div>
      <div>
      <TextField
          id="standard-textarea"
          label="< Past Your Code Here />"
          placeholder="Hello World!"
          multiline
          variant="filled"
          ref={codeInputRef}
        />
      </div>
      <div>
        <Button id="submit" variant="contained">Submit</Button>
      </div>
    </div>
  );
}