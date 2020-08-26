import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
//import Axios from 'axios';
import { user_id } from '../assets/Keys/Keys.js';
import * as emailjs from "emailjs-com";

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})


        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;

        // this.setState({
        //     [name]: value
        // })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        emailjs
            .sendForm(
                "gmail",
                "template_Z3zuFc8h",
                "ContactForm",
                user_id
            )
            .then()
            .catch()

        this.setState({
            name: "",
            email: "",
            message: "",
        });


    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content >
                    <Form id="ContactForm" onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange.bind(this)} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit">
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;