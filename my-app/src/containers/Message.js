import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Message extends Component {

    // constructor (props) {

    //     super(props)

    // }

   render() {

       return (

          <Link to={{ pathname: '/Home', state: { mold: 'add' }, aa: 'dddd' }} className="home-link"><h3>Message{this.props.match.params.id}</h3></Link> 

       );

   }

}

export default Message;