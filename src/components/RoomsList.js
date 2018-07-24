import React, { Component } from "react";

class RoomsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="rooms-list grid__elem">
    <div className="title">Rooms list</div>
      <ul>
        {this.props.rooms.map(room => {
          return <li key={room.id}>#{room.name}</li>
        })}
      </ul>
    </div>;
  }
}

export default RoomsList;
