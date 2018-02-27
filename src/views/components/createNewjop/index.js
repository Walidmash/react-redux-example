import React from 'react';
import CreateJobForm from './createJobForm';
import './index.css';

const CreateJob = () => {
  return (
    <div className='newJob outerContainer'>
      <h2 className='newJob__title'>Create a new job</h2>
      <CreateJobForm />
    </div>
  );
};

export default CreateJob;
