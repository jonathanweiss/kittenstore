import React from 'react';
import { NavigationPrompt } from 'react-router';

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      modifiedContent: false,
    };
  }

  markAsChanged(e) {
    if (e.target.value.length > 0) {
      this.setState({
        modifiedContent: true,
      });
    }
  }

  render() {
    return (
      <div className="columns">
        <NavigationPrompt
          when={this.state.modifiedContent}
          message={location => `Are you sure you want to go to ${location.pathname}?`}
        />
        <div className="column col-12">
          <h2>Contact us</h2>
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="input-example-1">Name</label>
              <input className="form-input" onChange={e => this.markAsChanged(e)} type="text" id="input-example-1" placeholder="Name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="input-example-3">Message</label>
              <textarea className="form-input" onChange={e => this.markAsChanged(e)} id="input-example-3" placeholder="Textarea" rows="3" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">Submit</button>
              <button className="btn btn-link" type="reset">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
