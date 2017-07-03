import React from 'react';

/** User Profile Summary Card Component */
export class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img id="profileImage" src="https://pbs.twimg.com/media/CrUIEanUIAElFpE.png" alt="Orko" />
        <div className="contain">
          <h1> Orko </h1>
          <p className="title">Trollan & Wizard </p>
          <hr />
          <p id="stats">Stats</p>
          <hr />
          <p id="posts">Posts: {3} </p>
          <p><button>Edit</button></p>
        </div>
      </div>
    );
  }
}
