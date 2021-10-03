import React from 'react';
import { Link } from 'react-router-dom';

import classes from './FeedCodeBlock.module.css';

export default function Feed(props) {
  return (
    <section>
      {/* update the link to /postview/${props.info.id} to get the post id from props and redirect there */}
      <Link to={`/postview/`}>
        <div className={classes.codeBlock}>
          <div>
            Code: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ullam eligendi dolore harum, recusandae voluptate officia dolorum
            voluptas magnam quidem laudantium magni. Exercitationem doloremque
            at modi provident, officia dignissimos commodi excepturi?
          </div>
          <div>Username</div>
        </div>
      </Link>
    </section>
  );
}
