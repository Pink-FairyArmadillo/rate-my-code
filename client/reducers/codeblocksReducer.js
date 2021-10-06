/* eslint-disable indent */
/**
 * ************************************
 *
 * @module  codeblocksReducer
 * @author
 * @date
 * @description reducer for code blocks
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  codeBlocks: [],
};

const postsReducer = (state = initialState, action) => {
  const codeBlocks = [];
  
  // deep clone codeBlocks
  state.codeBlocks.forEach(codeBlock => {
    codeBlocks.push(JSON.parse(JSON.stringify(codeBlock)));
  });

  switch (action.type ) {
    // add new post and return new state
    case types.ADD_CODEBLOCKS: {
    
      
      break;

    }

    default:
      return state;
  }
};

export default postsReducer;



