import React, { Component } from 'react';
import{ RoomContext} from "../context";
import Title from './Title';



export default class FeaturedRoom extends Component {
 static contextType = RoomContext;
 
  render() {
    const { featuredRooms: rooms} = this.context
    console.log(rooms, "This room from featuredRoom");
   
    return (
      <div>
            {/* <Title title={"Room featured"} /> 

            {rooms.map((item, index)=> (
              <div key={index}>
                <h1>{item.fileds}asdf</h1>
              </div>
            ))} */}
        </div>
    )
  }
}
