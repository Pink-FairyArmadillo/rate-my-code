import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; 
// import ReactDOM from 'react-dom';
import MainContainer from '../containers/MainContainer.jsx';
import FeedCodeBlock from './FeedCodeBlock.jsx';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  loadAllCodeBlocks: (codeBlocks) => dispatch(actions.loadAllCodeBlocksActionCreator(codeBlocks)),
});

const mapStateToProps = state => ({
  codeBlocks: state.codeBlocks.codeBlocks,
});

function Feed(props) {
  // React hooks for state - store the data from the database
  // const [codeBlocks, setCodeBlocks] = useState([]);

  // update state that we fetch
  useEffect( () => {
    const data = [];
    // mocking up data pending backend API fixes
    data.push('console.log(\'a\')');
    data.push('console.log(\'b\')');
    data.push('console.log(\'c\')');
    data.push('console.log(\'d\')');
    data.push('console.log(\'e\')');

    props.loadAllCodeBlocks(data);


    // fetch(`/api/getTopic/${props.topic}`)
    //   .then((res) => res.json())
    //   .then((data) => {

    //   })
    //   .catch((err) => console.log(err));
  }, []);

  // create codeblock components and save them in an array
  // const codeBlockEl = codeBlocks.map(post => {
  //   return <FeedCodeBlock key={post._id} code={post.code} />;
  // });

  // mocking up data pending backend fixes
  const codeBlockEl = [];
  codeBlockEl.push(<FeedCodeBlock key={2} code={'console.log(\'b\')'} />);
  codeBlockEl.push(<FeedCodeBlock key={3} code={'console.log(\'c\')'} />);

  console.log(props.codeBlocks);

  // returns code block cards
  return (
    <div>
      <div>
        {props.codeBlocks}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);