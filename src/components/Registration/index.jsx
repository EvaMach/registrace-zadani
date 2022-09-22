import React, { useState } from 'react';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  console.log(user);

  const checkEmail = () => {
    if (user.username === '' && user.email.includes('@')) {
      const userName = user.email.slice(0, [user.email.indexOf('@')]);
      setUser({ ...user, username: userName });
    }
  };

  return (
    <form className="form">
      <input
        className="form__input"
        placeholder="Email Adress"
        onChange={(event) => {
          setUser({ ...user, email: event.target.value });
          checkEmail();
        }}
        type="email"
      />
      <input
        className="form__input"
        value={user.username}
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
        type="text"
      />
      <input
        className="form__input"
        placeholder="Password"
        onChange={(event) => setUser({ ...user, password: event.target.value })}
        type="password"
      />
      <input
        className="form__input"
        placeholder="Confirm Password"
        onChange={(event) =>
          setUser({ ...user, passwordConfirm: event.target.value })
        }
        type="password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
