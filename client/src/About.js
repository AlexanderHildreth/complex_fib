import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      What is this App about?

      Small app to test and play around with the deployment workflow. Using TravisCI and AWS
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default About