import React, { Component } from "react";

class AddMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <div className="add-message-form grid__elem">
        <form onSubmit={this.handleSubmit} className="msg-form">
          <input
            value={this.state.message}
            onChange={this.handleChange}
            className="msg-input"
            placeholder="Your message"
          />
          <button className="msg-button" type="submit">
            <i className="fab fa-telegram-plane fa-3x icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default AddMessageForm;
