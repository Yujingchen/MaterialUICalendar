import React, { Component } from "./node_modules/react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "./node_modules/prop-types";
import { connect } from "./node_modules/react-redux";
import { addContact } from "../../actions/contactActions";
class EditCustomer extends Component {
    state = {
        name: "",
        city: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        errors: {}
    };
    componentWillReceiveProps(nextProps, nextState) {
        const { name, email, phone } = nextProps.contact;
        this.setState({
            name,
            email,
            phone
        });
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getContact(id);
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, city, email, phone, address, postcode } = this.state;

        // Check For Errors
        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }

        if (city === "") {
            this.setState({ errors: { email: "Email is required" } });
            return;
        }

        if (email === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }
        if (address === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }
        if (postcode === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }


        const newContact = {
            name,
            email,
            city,
            phone,
            address,
            postcode,
            errors: {}
        };

        //// SUBMIT Customer ////

        this.props.addContact(newContact);
        //// DELETE CONTACT ////
        // Clear State
        this.setState({
            name: "",
            city: "",
            email: "",
            phone: "",
            address: "",
            postcode: "",
            errors: {}
        });

        this.props.history.push("/table");
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Customer</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup
                            label="Name"
                            name="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        <TextInputGroup
                            label="City"
                            name="city"
                            type="city"
                            placeholder="Enter City"
                            value={city}
                            onChange={this.onChange}
                            error={errors.city}
                        />
                        <TextInputGroup
                            label="Email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={this.onChange}
                            error={errors.email}
                        />
                        <TextInputGroup
                            label="Phone"
                            name="phone"
                            placeholder="Enter Phone"
                            value={phone}
                            onChange={this.onChange}
                            error={errors.phone}
                        />
                        <TextInputGroup
                            label="Address"
                            name="address"
                            placeholder="Enter Address"
                            value={address}
                            onChange={this.onChange}
                            error={errors.address}
                        />
                        <TextInputGroup
                            label="Postcode"
                            name="postcode"
                            placeholder="Enter Postcode"
                            value={postcode}
                            onChange={this.onChange}
                            error={errors.postcode}
                        />
                        <input
                            type="submit"
                            value="Add Customer"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
};

export default connect(
    null,
    { addContact }
)(EditCustomer);