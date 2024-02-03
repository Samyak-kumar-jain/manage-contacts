import React, { useState } from 'react';

function Add({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleOnChange = (data) => {
    if (data.target.name === "name") {
      setContactData({ ...contactData, name: data.target.value });
    } else {
      setContactData({ ...contactData, email: data.target.value });
    }
  };

  const handleSaveContacts = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill in all the fields before saving.");
    } else {
      addContact(contactData);
      setContactData({ name: "", email: "" });
    }
  };

  return (
    <>
      <div className="con">
        <div className="save-contacts-container">
          <h2>Save Contacts</h2>
          <form className="save-contacts-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactData.name}
                onChange={handleOnChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"  
                value={contactData.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
              />
            </div>
            <button type="button" onClick={handleSaveContacts}>
              Save Contacts
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
