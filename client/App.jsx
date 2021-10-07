import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import './App.module.css';
import Feed from './components/Feed.jsx';
import FeedCodeBlock from './components/FeedCodeBlock.jsx'; //delete when we can fetch from database
import CreatePost from './components/CreatePost.jsx';

import LogInContainer from './containers/LogInContainer.jsx';
export default function App(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <LogInContainer />
      </Route>
      <Route path="/home">
        <MainContainer />
      </Route>
    </Switch>
  );
}

// const App = props => {
//   return (
//     <div className="router">
//       <main>
//         {/*
//             NOTE: The syntax below is for React-Router
//               - A helpful library for routing with a React app.
//               You can learn more about this at:
//               https://reacttraining.com/react-router/web/guides/quick-start
//         */}
//         <Switch>
//           <Route
//             exact
//             path="/"
//             component={Characters}
//           />
//           <Route
//             exact
//             path="/create"
//             component={CreateCharacter}
//           />
//         </Switch>
//       </main>
//     </div>
//   );
// };
