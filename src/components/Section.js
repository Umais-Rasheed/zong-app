import React from 'react';
import './../App.css';

function Section() {
  return (
    <div className='imgcircle'>
      <span className="border border-success mx-4 rounded-circle">
        <img src="section/app.png" alt="app" width="100" height="100" />
      </span>
      <span className="border border-success  mx-4 rounded-circle">
        <img src="section/calculator.png" alt="claculater" width="100" height="100" />
      </span>
      <span className="border border-success  mx-4 m-8 rounded-circle">
        <img src="section/cart.png" alt="cart" width="100" height="100" />
      </span>
      <span className="border border-success  mx-4 rounded-circle">
        <img src="section/postpaid.png" alt="postpaid" width="100" height="100" />
      </span>
      <span className="border border-success  mx-4 rounded-circle">
        <img src="section/prepaid.png" alt="prepaid" width="100" height="100" />
      </span>
      <span className="border border-success mx-4 rounded-circle">
        <img src="section/recharge.png" alt="recharge" width="100" height="100" />
      </span>
      <span className="border border-success  mx-4 rounded-circle">
        <img src="section/sim.png" alt="sim" width="100" height="100" />
      </span>
    </div>
  )
}

export default Section
