import React from "react";
import contacts from "../contacts"; // assuming this file contains an array of contact objects
import Card from "./Card_21";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Card
          key={contact.name}  // Add a key prop to help React identify each component
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
