import React from "react";
import data from "./Data";

const Card = ({ searchQuery }) => {
  const filteredUsers = data.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className='card-container'>
      {filteredUsers.map((data, index) => (
        <div key={data.id} className='card'>
          <img src={data.picture} alt='' />
          <div>
            <p>{data.id}</p>
            <h3>{data.title + " " + data.firstName + " " + data.lastName}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Card;
