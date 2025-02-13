import React from 'react';
import './SelectTicket.css';

function SelectTicket() {
  return (
    <main className='container'>
      <div className='heading'>
        <h2>Ticket Selection</h2>
        <span>Step1/3</span>
      </div>
      <hr />

      <form action='' className='ticket-container'>
        <div className='banner'>
          <h1>Techember Fest "25</h1>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className='loction'>
            <p>📍 [Event Location] ||</p>
            <span>📍 [Event Location]</span>
          </div>
        </div>
        <hr />
        <div className='ticket-type'>
          <h4>Select Ticket Type</h4>
          <div className='type-buttons'>
            <button className='button-one btn'>
              <div className=''>
                <h5>Free</h5>
                <p>REGULAR ACCESS</p>
                <p>20/52</p>
              </div>
            </button>
            <button className='button-two btn'>
              <div className=' '>
                <h5>$150</h5>
                <p>VIP ACCESS</p>
                <p>20/52</p>
              </div>
            </button>
            <button className='button-three btn'>
              <div className=''>
                <h5>$150</h5>
                <p>VVIP ACCESS</p>
                <p>20/52</p>
              </div>
            </button>
          </div>
        </div>
        <div className='no-ticket'>
          <h4>Number of Tickets</h4>
          <select name='' id=''>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className="form-submit-btn">
          <button className='cancel-btn btn'>Cancel</button>
          <button className="next-btn btn">
            Next
          </button>
         </div>
      </form>
    </main>
  );
}

export default SelectTicket;
