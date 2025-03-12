import React from 'react';

const AccountForm = ({ onSubmit, extraProps }) => {
  return (
    <form onSubmit={onSubmit} {...extraProps}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" {...extraProps} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" {...extraProps} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AccountForm;