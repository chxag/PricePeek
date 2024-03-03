"use client"
import '../app/login/login.css'; 
import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    return (
      <div className="flex flex-col gap-10 w-400">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
      </div>
    );
}

export default LoginForm