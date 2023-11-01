import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions';
import { useRouter } from 'next/router';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user, router));
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;