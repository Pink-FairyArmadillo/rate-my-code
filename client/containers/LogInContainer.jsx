import React, { useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LogInContainer() {
  const [verified, setVerified] = useState(false);
  const [signedup, setSignedup] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function login() {
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const user = {
      username: enteredUsername,
      password: enteredPassword,
    };

    // make fetch request to check login data
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setVerified(true);
        }
      })
      .catch((err) => console.log('POST REQUEST ERROR: ', err));
  }

  function signup() {
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const user = {
      username: enteredUsername,
      password: enteredPassword,
    };

    // make fetch request to send new user data
    fetch('/login/createUser', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setSignedup(true);
        }
      })
      .catch((err) => console.log('POST REQUEST ERROR: ', err));
  }

  //redirect if login is verified or successfully signedup

  if (verified || signedup) {
    return (
      <Redirect
        to={{
          pathname: '/feed',
        }}
      />
    );
  }

  return (
    <section>
      {/* temp bar to delete after development */}
      <header>
        TEMP NAV BAR:
        <Link to="/feed">Feed</Link>
        <Link to="/postview">Post View</Link>
        <Link to="/createpost">Create Post</Link>
      </header>
      <h1>Rate-My-Code</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            ref={usernameInputRef}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          ></input>
        </div>
        <button onClick={login}>Login</button>
        <button onClick={signup}>Signup</button>
      </form>
    </section>
  );
}
