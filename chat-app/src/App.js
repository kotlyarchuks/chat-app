import React, { Component } from 'react';
import AddMessageForm from './components/AddMessageForm';
import MessageList from "./components/MessageList";
import AddRoomForm from "./components/AddRoomForm";
import RoomsList from "./components/RoomsList";

class App extends Component {
  render() {
    return (
      <div>
        <RoomsList />
        <MessageList />
        <AddRoomForm />
        <AddMessageForm />
      </div>
    );
  }
}

export default App;
