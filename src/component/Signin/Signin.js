import React, { Component } from "react";
import FormField from "../util/Form_field/FormField";
import { firebase } from "../../Firebase/Firebase";
import { validate } from "../util/validation";
import { connect } from 'react-redux';
import { login } from "../../actions/authenticateAction"
import "./Signin.css";

class SignIn extends Component {
    state = {
        formError: false,
        formSuccess: "",
        formdata: {
            email: {
                element: "input",
                value: "",
                config: {
                    name: "email_input",
                    type: "email",
                    placeholder: "Enter your email"
                },
                validation: { required: true, email: true },
                valid: true,
                validationMessage: ""
            },
            password: {
                element: "input",
                value: "",
                config: {
                    name: "password_input",
                    type: "password",
                    placeholder: "Enter your password"
                },
                validation: { required: true },
                valid: true,
                validationMessage: ""
            }
        }
    };

    updateForm = element => {
        let newFormdata = { ...this.state.formdata };
        let newElement = { ...newFormdata[element.id] };
        newElement.value = element.event.target.value;
        let valiData = validate(newElement);
        newElement.valid = valiData[0];
        newElement.validationMessage = valiData[1];

        newFormdata[element.id] = newElement;

        this.setState({ formError: false, formdata: newFormdata });
    };

    submitForm(event) {
        const { formdata } = this.state;
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;
        for (let key in formdata) {
            dataToSubmit[key] = formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
            //unclear
        }

        if (formIsValid) {
            firebase
                .auth()
                .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
                .then(() => {
                    this.props.passAuthenticate()
                    this.props.history.push("/dashboard");
                })
                .catch(error => {
                    this.setState({
                        formError: true
                    });
                });
        } else {
            this.setState({
                formError: true
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{ margin: "100px" }}>
                    <form
                        onSubmit={event => {
                            this.submitForm();
                        }}
                    >
                        <h2>Please Login</h2>
                    </form>
                    <FormField
                        id={"email"}
                        formdata={this.state.formdata.email}
                        change={element => this.updateForm(element)}
                        className="enroll_input"
                    />

                    <FormField
                        id={"password"}
                        formdata={this.state.formdata.password}
                        change={element => this.updateForm(element)}
                        className="enroll_input"
                    />
                    {this.state.formError ? (
                        <div className="error_label">Something is wrong.Try again</div>
                    ) : null}
                    <button onClick={event => this.submitForm(event)}>Login</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    passAuthenticate: () => {
        dispatch(login())
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
