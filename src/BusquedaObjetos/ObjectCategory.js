import React, {Component} from 'react';
import './ObjectHome.css';
import ObjectCategory from './ObjectCategory.js';

class ObjectHome extends Component {
  render(){
    return (
      <div>
        <image/>
        <h1>{this.props.name}</h1>
      </div>      
    )
  }
}

export default ObjectHome;
