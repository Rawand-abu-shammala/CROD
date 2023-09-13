// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <Link to="/stores">Go to Stores</Link>
    </div>
  );
};

export default Home;
