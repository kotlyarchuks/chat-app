import React, { Component } from "react";
import Message from './Message';

const MOCK_DATA = [
  {
    id: 1,
    sender: "Jonathan Nixon",
    message: "Hello there!"
  },
  {
    id: 2,
    sender: "Anny Hensweth",
    message: "Sup! How u doin, darlin? Anything is up? WYD?"
  },
  {
    id: 3,
    sender: "Jonathan Nixon",
    message: "Amma fine, thx!"
  }
];

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="message-list grid__elem">
        <div className="title">Message List</div>
          {MOCK_DATA.map((elem, index) => {
            return (
              <div key={index}><Message author={elem.sender} message={elem.message} id={elem.id}/></div>
            )
          })}
      </div>
    )
  }
}

export default MessageList;
