import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        function hidd() {
            alert(5)
        }
        function hidds() {
            alert('5s')
        }
        var data = [
            {
                value:0,
                label:'测试1'
            },
            {
                value:1,
                label:'测试2'
            }
        ]
        return (
            <div>
                <p id="home-container">
                    {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
                    <Link to={{ pathname: '/Test', state: { mold: 'add' }, aa: 'dddd' }} className="home-link">
                        <button>点击跳转到路由参数search，state使用</button>
                    </Link>
                </p>
                <button onClick={hidd}>按钮</button>
                <button onClick={hidds}>按钮s</button>
                <ul>
                    {
                        data.map(function (item) {
                            return <li>{item.label}</li>
                        })
                    }
                </ul>
                <table>
                    <tr>
                        {
                            data.map(function (item) {
                                return <td>{item.value}</td>
                            })
                        }

                    </tr>
                    <tr>
                        {
                            data.map(function (item) {
                                return <td>{item.label}</td>
                            })
                        }
                    </tr>
                </table>
            </div>

        );

    }

}

export default Home;