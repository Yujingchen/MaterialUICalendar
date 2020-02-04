import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
// import Header from '../components/Header/Header.jsx';
// import Footer from '../components/Footer/Footer.jsx';
import Sidebar from '../component/sidebar/Sidebar';
// import MessageBox from '../components/MessageBox';
import dashboardRoutes from '../routes/dashboard';
import dashboardStyle from './dashboardStyle.jsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
//Actions
// import NotificationActions from '../actions/Notifications';

import { getImgSrc } from '../commons/commonFuncs';
//Import may not working with Reserved proxy so using require instead.
const image = getImgSrc(require('../assets/img/sidebar-2.jpg'));
const logo = require('../assets/img/react_logo.svg');

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map(
      (prop, key) =>
        prop.redirect ? (
          <Redirect from={prop.path} to={prop.to} key={key} />
        ) : (
            <Route path={prop.path} component={prop.component} key={key} />
          )
    )}
  </Switch>
);

//Connect component to Redux store.
// @connect(
//   state => ({
//     messageBox: state.messageBox || {},
//     notifications: state.notifications || []
//   }),
//   dispatch => ({
//     actions: bindActionCreators(NotificationActions, dispatch)
//   })
// )
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mobileOpen: false,
      open: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== '/maps';
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') <= -1) return;
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname === e.location.pathname) return;

    this.refs.mainPanel.scrollTop = 0;
    if (this.state.mobileOpen) this.setState({ mobileOpen: false });
  }
  handleDrawerToggle = (open) => event => {
    this.setState({ ...this.state, open: open });
  };

  render() {
    const { classes, notifications, messageBox, left, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        {/* Use drawer */}
        <Sidebar
          routes={dashboardRoutes}
          logoText={'TRAININGO'}
          logo={logo}
          image={image}
          toggleDrawer={this.handleDrawerToggle()}
          open={this.state.open}
          color="blue"
          {...rest}
        />

        <div className={classes.mainPanel} ref="mainPanel">
          <Button onClick={this.handleDrawerToggle(true)}>Open sidebar</Button>

          {/* <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            notifications={notifications}
            onNotificationChange={this.onNotificationChange}
            onNotificationDelete={this.onNotificationDelete}
            notificationBackgroundImage={image}
            {...rest}
          /> */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
              <div className={classes.map}>{switchRoutes}</div>
            )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);