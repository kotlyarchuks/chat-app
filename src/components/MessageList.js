import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="message-list grid__elem">
        <div className="title">Message List</div>
        {this.props.messages.map((elem, index) => {
          return (
            <div key={index}>
              <Message
                author={elem.senderId}
                message={elem.text}
                id={elem.id}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
