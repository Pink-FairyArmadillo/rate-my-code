import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import CreatePost from '../components/CreatePost.jsx';
import Container from '@mui/material/Container';
import FeedCodeBlock from '../components/FeedCodeBlock.jsx';

import classes from './MainContainer.module.css';
import './custom.scss';

export default function MainContainer() {
  return (
    <Container className={classes.mainContainer}>
      <ProSidebar className={classes.sidebar}>
        <Menu iconShape="square">
          <MenuItem>
            <Link to="/feed">Home</Link>
          </MenuItem>
          <MenuItem>JavaScript</MenuItem>
          <MenuItem>Python</MenuItem>
          <MenuItem>C#</MenuItem>
          <MenuItem>C++</MenuItem>
          <MenuItem>Java</MenuItem>
          <MenuItem>PHP</MenuItem>
        </Menu>
      </ProSidebar>
      {/* we may need to import other components below */}
      {/* <main className={classes.codeBlockContainer}>
        <FeedCodeBlock />
        <FeedCodeBlock />
        <FeedCodeBlock />
        <FeedCodeBlock />
        <FeedCodeBlock />
        <FeedCodeBlock />
      </main> */}
      <div>
        <Link to="/createpost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </Link>
      </div>
    </Container>
  );
}



//@import '~react-pro-sidebar/dist/scss/styles.scss'; for styles.scss
