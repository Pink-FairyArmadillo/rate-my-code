import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import MainContainer from '../containers/MainContainer.jsx';
import FeedCodeBlock from './FeedCodeBlock.jsx';

export default function Feed(props) {
  // React hooks for state - store the data from the database
  const [codeBlocks, setCodeBlocks] = useState([]);

  // update state that we fetch
  useEffect( () => {
    fetch(`/api/getTopic/${props.topic}`)
      .then((res) => res.json())
      .then((data) => {
        setCodeBlocks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // create codeblock components and save them in an array
  // const codeBlockEl = codeBlocks.map(post => {
  //   return <FeedCodeBlock key={post._id} code={post.code} />;
  // });

  // mocking up data pending backend fixes
  const codeBlockEl = [];
  codeBlockEl.push(<FeedCodeBlock key={1} code={`console.log('a')`} />);
  codeBlockEl.push(<FeedCodeBlock key={2} code={`console.log('b')`} />);
  codeBlockEl.push(<FeedCodeBlock key={3} code={`console.log('c')`} />);

  // returns code block cards
  return (
    <div>
      <div>
        {codeBlockEl}
      </div>
    </div>
  );
}
