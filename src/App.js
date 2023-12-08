import React, { Component } from "react";

class App extends Component {
 constructor (props){
  super(props)
  this.state = {
  Person: {
    fullName: "Lionel Messi",
    bio: "Greatest of all Time",
    imgSrc: "https://wallpapers.com/images/hd/messi-pictures-jzykf84saw6wbkd6.jpg" ,
    profession: "Footballer",
  },
  show: false,
};
this.showprofile = this.showprofile.bind(this)
} 
  

  showprofile (){
    this.setState(prevstate=> ({
      show: !prevstate.show
    }))
  }
    

  
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;

    return (
      <div className="App">
        {this.state.show&&<><h1>{fullName}</h1>
        <p>{bio}</p>
        <img src={imgSrc} alt={fullName} width="300px" height="200px" />
        <p>{profession}</p></>}
        <button onClick={this.showprofile}>{this.state.show ? "Hide Profile" : "Show Profile"}</button>
        
      </div>
    );
  }
}

export default App;

