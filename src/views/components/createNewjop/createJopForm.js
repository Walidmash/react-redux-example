import React from 'react';

const CreateJopForm = () => {
  return (
    <form>
      First name:
      <input type='text' name='firstname' value='Mickey' />
      Last name:
      <input type='text' name='lastname' value='Mouse' />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default CreateJopForm;
