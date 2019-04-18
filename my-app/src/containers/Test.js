import React, { Component } from 'react';
import { Input, Icon, Form, Button } from 'antd';
import '../global.css';
import FormItem from 'antd/lib/form/FormItem';

// @Form.create()

class Test extends Component {
    login = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <div id="test-container">

                

                </div>
                <div className="login">
                    <Form onSubmit={this.login} className="">
                        <FormItem className="center">
                            账号登录
                                </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('Username', {})(<Input ref={i => this.inputValue = i} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('Password', {})(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)
                            }
                        </FormItem>
                        <FormItem className="center">
                            <Button type="primary" htmlType="submit" className="login-form-button width">
                                登录
                                    </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );

    }

}

export default Form.create()(Test);