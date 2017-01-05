import React from 'react';

const Contact = () => (
  <div>
    <h2>Contact us</h2>
    <form>
      <div className="form-group">
        <label className="form-label" htmlFor="input-example-1">Name</label>
        <input className="form-input" type="text" id="input-example-1" placeholder="Name" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="input-example-3">Message</label>
        <textarea className="form-input" id="input-example-3" placeholder="Textarea" rows="3" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">Submit</button>
        <button className="btn btn-link" type="reset">Cancel</button>
      </div>
    </form>
  </div>
);

export default Contact;
