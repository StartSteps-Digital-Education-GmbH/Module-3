// Mark this file as a client component
"use client"; 

import TimeComponent from '../../components/TimeComponent'; // Importing the TimeComponent from the components directory.

const TimePage = () => {
  return (
    <div>
      <h1>Time Page</h1> {/* This is the title of the page */}
      <TimeComponent /> {/* This is where the TimeComponent is rendered, which will display the current time */}
    </div>
  );
};

export default TimePage; // Exporting the TimePage component so it can be used in other parts of the application.
