import React, { Component } from "react";
import UserContainer from './UserContainer'

class DisplayedUsers extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      count: 0,
      isActiveNext: true,
      isActivePrev: false,
    };
    this.nextUser = this.nextUser.bind(this);
    this.prevUser = this.prevUser.bind(this);
    
  }
  
  nextUser() {
    let {count} = this.state
    let users = this.props.users
    count = count + 1;
    this.setState({ count: count });

  if (count > users.length - 2) {
    this.setState({
      isActiveNext: false,
    });
  }
  if ( count > 0) {
    this.setState({
      isActivePrev: true,
    });
  }
}

    prevUser() {
      let {count} = this.state
      count = count - 1;
      this.setState({ count: count });
      if ( count < 1) {
        this.setState({
          isActivePrev: false,
        });
      }
      if ( count > 0) {
        this.setState({ isActiveNext: true });
      }
    }

    
  

  render() {
    //console.log(this.props.users);
    const users = this.props.users.map((user) => {
      return (
        <div key={user.id}>
          <UserContainer userData={user} />
        </div>
      )
    })
    let {count} = this.state
    return (
      <div>
        {users[count]}
        {this.state.isActivePrev ? (
          <button className='prev' onClick={this.prevUser}> {'< '}Previous</button>
        ) : null}
        {this.state.isActiveNext ? (
          <button className='next' onClick={this.nextUser}>Next ></button>
        ) : null}
      </div>
    );
  }
}

export default DisplayedUsers;
