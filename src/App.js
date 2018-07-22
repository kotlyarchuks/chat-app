import React, { Component } from "react";
import AddMessageForm from "./components/AddMessageForm";
import MessageList from "./components/MessageList";
import AddRoomForm from "./components/AddRoomForm";
import RoomsList from "./components/RoomsList";

import Chatkit from "@pusher/chatkit";
import { instanceLocator, url, userId } from "./config";

class App extends Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId,
      tokenProvider: new Chatkit.TokenProvider({
        url
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 12203449,
        hooks: {
          onNewMessage: message => {
            console.log(`Message: ${message.text}`);
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="container">
        <RoomsList />
        <MessageList />
        <AddRoomForm />
        <AddMessageForm />
      </div>
    );
  }
}

export default App;
