import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dropdown from './Dropdown';
import Info from './Info';
import NavBar from './NavBar';


class Home extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      chosen: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      chosen: e.target.value
    })
  };

  // handleOptionSelect = option => {
  //   console.log(option);
  // };

render() {
  const chosen = this.state.chosen;

  return(
    <div>
      <NavBar />
      <Dropdown onChoose={this.handleChange} />
      <Info items={chosen} />
    </div>    
  )
    }
}
export default Home;