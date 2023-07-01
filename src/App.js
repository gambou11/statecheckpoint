import React, { Component } from 'react'
import ProfileImg from './profile'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      fullName:"Adem Bouguerra",
      bio: "Hi, I'm Adem, a passionate web develooper",
      profession:"Web Developer",
      show:false,
      mountedTime: 0,
    }
  }
  show=()=> {
    this.setState({show:!this.state.show})
  }

  componentDidMount() {
    this.startTime = new Date().getTime();

    // Update elapsed time every second
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor((currentTime - this.startTime) / 1000);
      this.setState({ elapsedTime: elapsedTimeInSeconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
          <button onClick= {()=>{this.show();this.componentDidMount()}} style={{
    textAlign:"center",
    padding: "9px 25px",
    backgroundColor: "black",
    borderRadius:"40px",
    color:"aliceblue",
}}> 
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {this.state.show ? <ProfileImg fullName={this.state.fullName} 
          pic={this.state.imgSrc}
          bio={this.state.bio} 
          profession={this.state.profession}>
          </ProfileImg> : null} 
          <p>Time since last mount: {this.state.elapsedTime} seconds</p>

      </div>
    )
  }
}