import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import Feed from './components/Feed.jsx';
import FeedCodeBlock from './components/FeedCodeBlock.jsx'; //delete when we can fetch from database

export default function App(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <MainContainer />
        </Route>
        <Route path="/postview"></Route>
        <Route path="/createpost"></Route>
        <Route path="/feed">
          <Feed />
          <FeedCodeBlock /> {/* //delete when we can fetch from database */}
        </Route>
      </Switch>
    </div>
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
