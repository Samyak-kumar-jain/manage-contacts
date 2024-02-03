import React from 'react'

function Contactlist({ contact }) {
    const contactElements = contact.map((val, index) => (
      <div key={index} className="contact-entry">
        <div>
        <div className="contact-name">{val.name}</div>
        <div className="contact-email">{val.email}</div>
        </div>
        <div><button className="bt" onClick={}>Delete</button></div>

      </div>
    ));
  
    return (
      <div className="contact-list-container">
        <div className="contact-list-title">Contact List</div>
        {contactElements}
      </div>
    );
  }
  export default Contactlist