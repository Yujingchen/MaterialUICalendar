import React, { Component } from "react";
import { connect } from 'react-redux';
import { addCustomer } from "../../actions/customerAction";
import TextInputGroup from "../../layouts/TextInputGroup"

class ClientAdd extends Component {
    state = {
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email: "",
        phone: "",
        errors: {}
    };

    onSubmit = e => {
        e.preventDefault();

        const { firstname, lastname, city, email, phone, streetaddress, postcode } = this.state;

        // Check For Errors
        if (firstname === "") {
            this.setState({ errors: { firstname: "First name is required" } });
            return;
        }
        if (lastname === "") {
            this.setState({ errors: { lastname: "Last name is required" } });
            return;
        }

        if (city === "") {
            this.setState({ errors: { city: "City is required" } });
            return;
        }

        if (email === "") {
            this.setState({ errors: { email: "Email is required" } });
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }
        if (streetaddress === "") {
            this.setState({ errors: { streetaddress: "Street Address is required" } });
            return;
        }
        if (postcode === "") {
            this.setState({ errors: { postcode: "Postcode is required" } });
            return;
        }

        const newID = this.props.customers.length + 1
        const newCustomer = {
            firstname,
            lastname,
            streetaddress,
            postcode,
            city,
            email,
            phone,
            links: [{
                rel: "self",
                href: `https://customerrest.herokuapp.com/api/customers/${newID}`
            }, {
                rel: "customer",
                href: `https://customerrest.herokuapp.com/api/customers/${newID}`
            }, {
                rel: "trainings",
                href: `https://customerrest.herokuapp.com/api/customers/${newID}/trainings`
            }]
        };


        this.props.addNewCustomer(newCustomer);
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

        (() => setTimeout(this.props.history.push("/table"), 1))();


    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { firstname, lastname, city, email, phone, streetaddress, postcode, errors } = this.state;

        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="card-header">Add Customer</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup
                                label="First Name"
                                name="firstname"
                                placeholder="Enter Frist Name"
                                value={firstname}
                                onChange={this.onChange}
                                error={errors.firstname}
                            />
                            <TextInputGroup
                                label="Last Name"
                                name="lastname"
                                placeholder="Enter Last Name"
                                value={lastname}
                                onChange={this.onChange}
                                error={errors.lastname}
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
                                label="Stree Address"
                                name="streetaddress"
                                placeholder="Enter Stree Address"
                                value={streetaddress}
                                onChange={this.onChange}
                                error={errors.streetaddress}
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers.customers
});


const mapDispatchToProps = dispatch => ({
    addNewCustomer: (data) => {
        dispatch(addCustomer(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientAdd);