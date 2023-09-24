import React, { useState } from 'react';
import styles from './LoginForm.module.scss'; // Import the CSS Module
import { api } from '../../api';
import axios from 'axios';

function LoginForm() {
  // Define state variables for the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, such as sending a request to your server
    axios.post(api+'login/', { email, password }).then((res)=>{
      localStorage.setItem('access', res.data.access_token)
      // localStorage.setItem('email', email)
    });
  };

  return (
    <div className={styles['login-form']}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles['submit-button']}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
