import React, { Component } from "react";
import AddMessageForm from "./components/AddMessageForm";
import MessageList from "./components/MessageList";
import AddRoomForm from "./components/AddRoomForm";
import RoomsList from "./components/RoomsList";

import Chatkit from "@pusher/chatkit";
import { instanceLocator, url, userId } from "./config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId,
      tokenProvider: new Chatkit.TokenProvider({
        url
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: 12203449,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: 12203449
    });
  }

  render() {
    return (
      <div className="container">
        <RoomsList />
        <MessageList messages={this.state.messages} />
        <AddRoomForm />
        <AddMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
