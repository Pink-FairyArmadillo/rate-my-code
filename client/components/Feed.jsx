import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import MainContainer from '../containers/MainContainer.jsx';
import FeedCodeBlock from './FeedCodeBlock.jsx';

export default function Feed() {
  // React hooks for state - store the data from the database
  const [codeBlocks, setCodeBlocks] = useState([]);

  // update state that we fetch
  fetch('/api')
    .then((res) => res.json())
    .then((data) => {
      setCodeBlocks(data);
    })
    .catch((err) => console.log(err));

  // create codeblock components and save them in an array
  const codeBlockEl = codeBlocks.map((code, i) => {
    return <FeedCodeBlock key={i} info={code} />;
  });

  // returns code block cards
  return (
    <div>
      {/* <MainContainer /> */}
      <FeedCodeBlock />
      <div>{codeBlockEl}</div>
    </div>
  );
}
