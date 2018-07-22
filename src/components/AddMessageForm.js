import React, { Component } from "react";

class AddMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div className="add-message-form grid__elem">
        <input className="msg-input" placeholder="Your message" />
        <button className="msg-button" type="submit">
          <i className="fab fa-telegram-plane fa-3x icon" />
        </button>
      </div>;
  }
}
 
export default AddMessageForm;