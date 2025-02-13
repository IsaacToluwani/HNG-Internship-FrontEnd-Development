import React, { useState, useEffect } from 'react';
import './SelectTicket.css';

function SelectTicket() {
  const [ticketQuantity, setTicketQuantity] = useState('1');
  const [ticketType, setTicketType] = useState('');

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedTicketQuantity = localStorage.getItem('ticketQuantity');
    const savedTicketType = localStorage.getItem('ticketType');
    if (savedTicketQuantity) {
      setTicketQuantity(savedTicketQuantity);
    }
    if (savedTicketType) {
      setTicketType(savedTicketType);
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('ticketQuantity', ticketQuantity);
    localStorage.setItem('ticketType', ticketType);
  }, [ticketQuantity, ticketType]);

  return (
    <main className='container'>
      <div className='heading'>
        <h2>Ticket Selection</h2>
        <p>Step 1/3</p>
      </div>
      <hr />

      <form action='' className='ticket-container' aria-labelledby="ticket-selection-form">
        <div className='banner'>
          <h1>Techember Fest '25</h1>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className='location'>
            <p>📍 [Event Location]</p>
            <p>||</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
        <hr />
        <div className='ticket-type'>
          <h4>Select Ticket Type</h4>
          <div className='btn-container'>
            <div className='type-buttons'>
              <button
                className={`button-one btn ${ticketType === 'free' ? 'selected' : ''}`}
                aria-label="Select Free Ticket"
                type="button"
                onClick={() => setTicketType('free')}
              >
                <div className=''>
                  <h5>Free</h5>
                  <p>REGULAR ACCESS</p>
                  <p>20/52</p>
                </div>
              </button>
              <button
                className={`button-two btn ${ticketType === 'vip' ? 'selected' : ''}`}
                aria-label="Select VIP Ticket"
                type="button"
                onClick={() => setTicketType('vip')}
              >
                <div className=' '>
                  <h5>$150</h5>
                  <p>VIP ACCESS</p>
                  <p>20/52</p>
                </div>
              </button>
              <button
                className={`button-three btn ${ticketType === 'vvip' ? 'selected' : ''}`}
                aria-label="Select VVIP Ticket"
                type="button"
                onClick={() => setTicketType('vvip')}
              >
                <div className=''>
                  <h5>$150</h5>
                  <p>VVIP ACCESS</p>
                  <p>20/52</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='no-ticket'>
          <h4>Number of Tickets</h4>
          <label htmlFor="ticket-quantity" className="sr-only">Select the number of tickets</label>
          <select
            name='ticket-quantity'
            id='ticket-quantity'
            aria-required="true"
            value={ticketQuantity}
            onChange={(e) => setTicketQuantity(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className='form-submit-btn'>
          <button className='cancel-btn btn' type="button" aria-label="Cancel">Cancel</button>
          <button className='next-btn btn' type="submit" aria-label="Next">Next</button>
        </div>
      </form>
    </main>
  );
}

export default SelectTicket;