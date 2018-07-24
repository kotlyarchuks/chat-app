import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Message from "./Message";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(){
    let node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight
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
