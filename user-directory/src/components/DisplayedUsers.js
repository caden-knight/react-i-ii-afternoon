import React, { Component } from "react";

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
    let userId = this.props.users[1].id
    count = count + 1;
    this.setState({ count: count });
    for(let i = count; i < users.length; ) {
      if(i === users[i].id) {
        console.log(i, users[i])
        
      }
    }
    if (count > 25) {
      this.setState({
        isActiveNext: false,
      });
    }
    if ( count > 1) {
      this.setState({
        isActivePrev: true,
      });
    }
    console.log("next user " + count );
  }

  prevUser() {
    let {count} = this.state
     count = count - 1;
    this.setState({ count: count });
    if ( count < 2) {
      this.setState({
        isActivePrev: false,
      });
    }
    if ( count > 0) {
      this.setState({ isActiveNext: true });
    }
    console.log("prev user " + count);

    
  }

  render() {
    //console.log(this.props.users);
    return (
      <div>
        
        {this.state.isActivePrev ? (
          <button className='prev' onClick={this.prevUser}>Previous</button>
        ) : null}
        {this.state.isActiveNext ? (
          <button className='next' onClick={this.nextUser}>Next</button>
        ) : null}
      </div>
    );
  }
}

export default DisplayedUsers;
