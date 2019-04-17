import React, { Component } from 'react';

 import { Link } from 'react-router-dom';

class Test extends Component {

    // constructor (props) {

    //     super(props)

    // }

   render() {

       return (

           <p id="test-container">

               <p>search:{this.props.location.search} </p>

               <p>state:{this.props.location.state.mold} </p>

               <p onClick={() =>  this.props.history.goBack()}>返回上一页</p>
               <Link to={{ pathname: '/Message', state: { mold: 'add' }, aa: 'dddd' }}>跳页</Link>

               <p onClick={() => this.props.history.push('/message/12')}>message页面</p>

           </p>

       );

   }

}

export default Test;