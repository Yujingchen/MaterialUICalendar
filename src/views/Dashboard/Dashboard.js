import React, { Component } from 'react';
// import Sidebar from "../../component/sidebar/Sidebar"
// import dashboardRoutes from '../routes/dashboard';
// import { getImgSrc } from '../commons/commonFuncs.ts';
import Calendar from "../../component/calendar/Calendar"
class Dashboard extends Component {

    render() {
        return (
            <div>
                <Calendar></Calendar>
            </div>
        );
    }
}

export default Dashboard;