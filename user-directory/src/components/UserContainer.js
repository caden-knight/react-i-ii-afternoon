import React from "react";

export default function UserContainer(props) {
  const user = props.userData;
  const name = user.name;
  const favMovie = user.favoriteMovies.map((movie, index) => {
    return <li key={index}> {index + 1}.) {movie} </li>;
  });
  const counter = <h2 className='count'>{user.id}/25</h2>

  return (
    <div className="white-card">
      <div className="contents">
        {counter}
        <h2 className='name'>{name.first} {name.last}</h2>
        <h4>From:
          <span> {user.city}, {user.country}</span>
        </h4>
        <h4>Job Title:
          <span> {user.title}</span>
        </h4>
        <h4 className='employer'>Employer: 
          <span> {user.employer}</span>
        </h4>
        <h4>Favorite Movies:
          <ul>{favMovie}</ul>
        </h4>
      </div>
    </div>
  );
}
