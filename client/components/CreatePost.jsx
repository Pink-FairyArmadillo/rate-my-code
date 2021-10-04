import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../containers/MainContainer.jsx';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function CreatePost() {
  // need title component

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

  return (
    <div>
      {/* <MainContainer /> */}
      <div>
        <DeleteOutlinedIcon />
      </div>
      <div>
        <TextField id="title" label="Title" variant="outlined" />
      </div>
      <div>{dropDownMenu}</div>
      <div>
        <TextField id="description" label="Description" variant="outlined" />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="< Past Your Code Here />"
          placeholder="Hello World!"
          multiline
          variant="filled"
        />
      </div>
      <div>
        <Button id="submit" variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
}
