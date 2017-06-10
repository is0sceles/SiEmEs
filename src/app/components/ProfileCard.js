import React from 'react';

export class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img id="profileImage" src="https://pbs.twimg.com/media/CrUIEanUIAElFpE.png" alt="Orko" />
        <div className="contain">
          <h1> Orko </h1>
          <p className="title">Trollan & Wizard </p>
          <hr />
          <p>Stats</p>
          <hr />
          <p>Posts: {3} </p>
          <p><button>Contact</button></p>
        </div>
      </div>
    );
  }
}
