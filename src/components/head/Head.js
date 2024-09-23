import React from 'react';
import './Head.css';
import Free from '../../images/image-1.png';
import Star from '../../images/star.svg';

export default function Head() {
  return (
    <div id='Head'>
        <div>
            <h1>
            Beautiful food & takeaway, <span style={{color: "#35B8BE"}}>delivered</span> to your door.
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            </p>
            <button id='btn'>Place an Order</button>
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={Star}/>
                <h4>Trustpilot</h4>
            </div>
            <p><span style={{color: "#35B8BE"}}>4.8 out of 5</span> based on 2000+ reviews</p>
        </div>
        <img src={Free}/>
    </div>
  )
}
