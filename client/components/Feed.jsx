import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import MainContainer from '../containers/MainContainer.jsx';
import FeedCodeBlock from './FeedCodeBlock.jsx';

export default function Feed(props) {
  // React hooks for state - store the data from the database
  const [codeBlocks, setCodeBlocks] = useState([]);

  // update state that we fetch
  fetch('/api/getAll')
    .then((res) => res.json())
    .then((data) => {
      setCodeBlocks(data);
    })
    .catch((err) => console.log(err));

  // create codeblock components and save them in an array
  const codeBlockEl = codeBlocks.map(post => {
    return <FeedCodeBlock key={post._id} code={post.code} />;
  });

  // returns code block cards
  return (
    <div>
      <div>{codeBlockEl}</div>
    </div>
  );
}
