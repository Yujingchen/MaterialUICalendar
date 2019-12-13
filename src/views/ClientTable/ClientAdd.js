import React, { Component } from 'react';
import AddCustomer from "../../component/Customer/AddCustomer"
class ClientAdd extends Component {
    render() {
        return (
            <div>
                <AddCustomer historypath={this.props.history}></AddCustomer>
            </div>
        );
    }
}

export default ClientAdd;