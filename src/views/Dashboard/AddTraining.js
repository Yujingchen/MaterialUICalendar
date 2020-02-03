import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTraining } from "../../actions/calendarAction";
import TextInputGroup from "../../layouts/TextInputGroup"

class ClientAdd extends Component {
    state = {
        time: "",
        activity: "",
        duration: "",
        customerId: "",
        errors: {}
    };

    onSubmit = e => {
        e.preventDefault();
        const { date } = this.props.match.params
        const { time, activity, duration, customerId } = this.state;

        // Check For Errors
        if (time === "") {
            this.setState({ errors: { time: "Training time is required" } });
            return;
        }
        if (activity === "") {
            this.setState({ errors: { lastname: "Activity name is required" } });
            return;
        }

        if (duration === "") {
            this.setState({ errors: { duration: "Duration is required" } });
            return;
        }

        if (customerId === "") {
            this.setState({ errors: { customerId: "Customer ID is required" } });
            return;
        }
        // const dateConvertor = (dateString) => {
        //     const date = new Date(dateString)
        //     const dateInMillionsecond = date.getTime()
        //     return dateInMillionsecond
        // }
        //convert date into millisecond
        const newTraining = {
            date: date.concat(`T${time}:00.000+0000`),
            activity,
            duration,
            customer: `https://localhost:8080/api/customers/${customerId}`,
        };

        this.props.addNewTraining(newTraining);
        // Clear State
        this.setState({
            date: "",
            activity: "",
            duration: "",
            customerId: "",
            errors: {}
        });
        this.props.history.push("/dashboard")
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { time, activity, duration, customerId, errors } = this.state;

        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="card-header">Add Training</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup
                                label="training time"
                                name="time"
                                placeholder="Enter time in format: hh:mm, for exmaple 12:00"
                                value={time}
                                onChange={this.onChange}
                                error={errors.time}
                            />
                            <TextInputGroup
                                label="Training activity"
                                name="activity"
                                placeholder="Enter activity name"
                                value={activity}
                                onChange={this.onChange}
                                error={errors.activity}
                            />
                            <TextInputGroup
                                label="Duration"
                                name="duration"
                                placeholder="Enter training duration"
                                value={duration}
                                onChange={this.onChange}
                                error={errors.duration}
                            />
                            <TextInputGroup
                                label="Customer Id"
                                name="customerId"
                                placeholder="Enter customer id"
                                value={customerId}
                                onChange={this.onChange}
                                error={errors.customerId}
                            />
                            <input
                                type="submit"
                                value="Add Training"
                                className="btn btn-light btn-block"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}




const mapDispatchToProps = dispatch => ({
    addNewTraining: (data) => {
        dispatch(addTraining(data))
    }
});

export default connect(null, mapDispatchToProps)(ClientAdd);