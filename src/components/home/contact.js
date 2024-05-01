import React from "react";

import { Button, Form, Input } from 'antd';
const { TextArea } = Input;

function AppContact() {
    return (
        <div id="contact" className="block contentBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Contact is the best way to contact the world</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                >

                    <Form.Item
                        name="fullname"
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                    >
                        <Input
                            type="email"
                            placeholder="Email Address"
                        />
                    </Form.Item>

                    <Form.Item
                        name="telephone"
                    >
                        <Input placeholder="Telephone" />
                    </Form.Item>

                    <Form.Item
                        name="subject"
                    >
                        <Input placeholder="Subject" />
                    </Form.Item>

                    <Form.Item
                        name="message"
                    >
                        <TextArea placeholder="Message" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
}

export default AppContact;