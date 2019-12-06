import React, { Component } from 'react';
// import Sidebar from "../../component/sidebar/Sidebar"
// import dashboardRoutes from '../routes/dashboard';
// import { getImgSrc } from '../commons/commonFuncs.ts';

class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    //     this.image = getImgSrc(require('./assets/img/sidebar-2.jpg'));
    //     this.logo = require('./assets/img/react_logo.svg');
    //     this.handleDrawerToggle = () => {
    //         this.setState({ mobileOpen: !this.state.mobileOpen });
    //     };
    //     this.state = {
    //         mobileOpen: false
    //     };
    // }
    render() {
        return (
            <div>
                {/* <Sidebar
                    routes={dashboardRoutes}
                    logoText={'Drunkcoding'}
                    logo={this.logo}
                    image={this.image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                // {...rest}
                /> */}
                Dashborad
            </div>
        );
    }
}

export default Dashboard;