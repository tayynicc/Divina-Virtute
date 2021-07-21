import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      
        <label className='login__label'>Username or Email</label>
          
        <input
          type="text"
          className='grow'
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      
        <label className='login__label'>Password</label>
        
        <input
          type="password"
          className='grow'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
      <button className='login__button grow' type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
