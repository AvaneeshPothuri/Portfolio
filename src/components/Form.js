import "./FormStyles.css";
import React from 'react';

const Form = () => {
  return (
    <div>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Subject</label>
          <input type="text" />
          <label>Message</label>
          <textarea rows="6" placeholder="Type Your Message Here"></textarea>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
