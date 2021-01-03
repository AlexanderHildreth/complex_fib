import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      What is this App about?
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default About