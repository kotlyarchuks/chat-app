import React, { Component } from "react";

class RoomsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const orderedRooms = [...this.props.rooms].sort((a,b) => a.id - b.id)
    return <div className="rooms-list grid__elem">
        <div className="title">Rooms list</div>
        <ul>
          {orderedRooms.map(room => {
            let active = room.id === this.props.roomId ? "active-room" : ""
            return <li key={room.id} className={active}>
                <a onClick={() => this.props.subscribeToRoom(room.id)} href="#">
                  #{room.name}
                </a>
              </li>;
          })}
        </ul>
      </div>;
  }
}

export default RoomsList;
