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
      messages: [],
      joinableRooms: [],
      joinedRooms: []
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

      this.currentUser
        .getJoinableRooms()
        .then(joinableRooms => {
          this.setState({
            joinableRooms,
            joinedRooms: this.currentUser.rooms
          });
        })
        .catch(err => {
          console.log("getJoinableRooms error:", err);
        });

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
    })
    .catch(err => {
      console.log("Connection error:", err)
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
        <RoomsList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages} />
        <AddRoomForm />
        <AddMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
