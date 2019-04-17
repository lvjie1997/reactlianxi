import React, { Component } from 'react';
import './App.css';


// class Board extends Component {
//   render() {
//     return (
//       <Square value={'按钮'} />
//     );
//   }
// }
// class Square extends Component {
//   render() {
//     function handleClick() {
//       alert(4)
//     }
//     return (
//       <button onClick={handleClick}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
class App extends Component {

  render() {

      return <p>{this.props.children}</p>;

  }

}

export default App;
