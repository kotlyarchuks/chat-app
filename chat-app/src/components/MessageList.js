import React, { Component } from "react";
import Message from './Message';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Message List</h4>
        <ul>
          <li><Message /></li>
        </ul>
      </div>
    )
  }
}

export default MessageList;
