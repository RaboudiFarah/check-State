import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Raboudi Farah",
      bio: " Communicate with other front-end developers within the company on best practices, new technologies. Excellent knowledge of JavaScript, HTML and CSS.",
      imgSrc: "Profile.jpg",
      profession: "Developer",
    },
    shows: false,
    mountTime: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountTime: this.state.mountTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div id="block">
        <button id="btn"  onClick={this.toggleShow}>Show Profile</button>
        {this.state.shows && (
          <div >
            <img src={this.state.person.imgSrc} alt="Person" />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Mounted since {this.state.mountTime} seconds ago</p>
      </div>
    );
  }
}

export default App;
