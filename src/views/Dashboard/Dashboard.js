import React, { Component } from 'react';
// import Sidebar from "../../component/sidebar/Sidebar"
// import dashboardRoutes from '../routes/dashboard';
// import { getImgSrc } from '../commons/commonFuncs.ts';
import Calendar from "../../component/Calendar/Calendar"
class Dashboard extends Component {

    render() {
        return (
            <div>
                <Calendar history={this.props.history}></Calendar>
            </div>
        );
    }
}

export default Dashboard;