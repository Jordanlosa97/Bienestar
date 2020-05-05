import React, { Component } from 'react';
import styles from './ObjectHome.module.css';
import ObjectCategory from './ObjectCategory.js';
import Logo from '../Assest/Image/ic_logo-web.png';

class ObjectHome extends Component {
  state = {
    objects: [
      { name: "Maletas", image: "25" },
      { name: "Celulares", image: "20" },
      { name: "Computadores", image: "29" },
      { name: "Llaves", image: "21" },
      { name: "Billeteras", image: "21" },
      { name: "Audifonos", image: "21" }
    ]
  }

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div>
            <img className={styles.logo} src={Logo} />
          </div>
          <div>
            <input  type="text" name="name" />
            {this.state.objects.map(object => <ObjectCategory name={object.name} />)}
            <button onClick={this.changeState}>Change</button>
          </div>
        </div>
      </div>
    )
  }

  changeState() {

    const newPersons = [
      { name: "Luisa", age: "25" },
      { name: "Jordan", age: "22" },
      { name: "Bryan", age: "15" },
      { name: "Juan", age: "5" }
    ]

    this.setState({
      persons: newPersons
    }, console.log(this.state))
  }
}

export default ObjectHome;
