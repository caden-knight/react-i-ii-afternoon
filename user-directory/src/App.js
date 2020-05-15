import React, { Component } from "react";
import Reset from "./reset.css";
import "./App.css";
import DisplayedUsers from "./components/DisplayedUsers";
import data from "./data";
import UserContainer from "./components/UserContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: data,
    };
  }
  
  render() {
    const {userData} = this.state
    const users = this.state.userData.map((user) => {
      return (
        <div key={user.id}>
          <UserContainer userData={user} />
        </div>
      );
    });
    //console.log(userData)
    return (
      <div className="display">
        <div className="header">
          <h4 className="home">Home</h4>
        </div>
        <DisplayedUsers users={userData}/>
      </div>
    );
  }
}

export default App;
