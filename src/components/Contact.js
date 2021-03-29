import React from "react";

import "./contact.css";

const name = 'Mayiiiii';
const avatar = 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg';
let online = false;

function Contact() {
  return (
    <div className="Contact">
      <img alt="" class="avatar" src={avatar}/>
      <div>
        <h3 class="name"> {name} </h3>
        <div class="status">
        <div class = {online ? 'status-online' : 'status-offline'}>
        </div>
        <p class="status-text">
          {online ? 'online': 'offline'}
        </p>
        </div>
      </div>
    </div>
 );
 };


export default Contact;
