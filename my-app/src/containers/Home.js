import React, { Component } from 'react';
import { Button, Table, Alert, message,Modal } from 'antd';
import '../App.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        size: 'large',
        button: '下载按钮'
    };
    
    Delete(record) {
        console.log(record)
    }
    edit = (record) => {
        console.log(record)
        this.setState({
            visible: true,
        });
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    render() {
        function hidd() {
            message.success('成功提示！')
        }
        const data = [
            {
                value: 0,
                label: '测试1'
            },
            {
                value: 1,
                label: '测试2'
            }
        ]
        const columns = [
            {
                title: '值',
                dataIndex: 'value',
                key: 'value'
            },
            {
                title: '名称',
                dataIndex: 'label',
                key: 'label'
            },
            {
                title: '操作',
                key: 'action',
                render: (record) => (
                    <div>
                        <Button type="primary" onClick={this.edit.bind(this,record)}>编辑</Button>&nbsp;&nbsp;&nbsp;
                        <Button onClick={this.Delete.bind(this, record)}>删除</Button>
                        <Modal
                            title="Basic Modal"
                            okText="确定"
                            cancelText="取消"
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </div>
                )
            }
        ]
        const size = this.state.size;
        return (
            <div>
                <div id="home-container">
                    {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
                    <Link to={{ pathname: '/Test', state: { mold: 'add' }, aa: 'dddd' }} className="home-link">
                        <Button>点击跳转到路由参数search，state使用</Button>
                    </Link>
                </div>
                <p onClick={() => this.props.history.push('/message')}>message页面</p>
                <Alert message="Success Text" type="success" />,
                <Button icon="fullscreen" onClick={hidd}>按钮</Button>
                <Button type="primary" shape="round" icon="download" size={size}>{this.state.button}</Button>
                <ul>
                    {
                        data.map((item, index) => {
                            return <li key={index}>{item.label}</li>

                        })
                    }
                </ul>
                <table>
                    <tr>
                        {
                            data.map((item, index) => {
                                return <td key={index}>{item.value}</td>
                            })
                        }

                    </tr>
                    <tr>
                        {
                            data.map((item, index) => {
                                return <td key={index}>{item.label}</td>
                            })
                        }
                    </tr>
                </table>
                <div className="App">
                    <Button type="primary">Button</Button>
                </div>
                <Table rowKey="value" className="spacing" bordered align="center" dataSource={data} columns={columns} />
            </div>

        );

    }

}

export default Home;