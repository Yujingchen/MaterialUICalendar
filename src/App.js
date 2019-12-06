import React from 'react';
// import Sidebar from "./component/sidebar/Sidebar"
// import './App.css';
// import dashboardRoutes from './routes/dashboard';
// import { getImgSrc } from './commons/commonFuncs.ts';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import indexRoutes from './routes/index';
import { GetBaseUrl } from './commons/commonFuncs';
import { createBrowserHistory } from 'history';
const base = GetBaseUrl();
const hist = createBrowserHistory({ basename: base });
const createRouter = () => {
  return (
    <BrowserRouter basename={base || '/'}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

//maping through indexRoutes to get all routes
//usually all routes be done here without mapping


// function App() {
//   const image = getImgSrc(require('./assets/img/sidebar-2.jpg'));
//   const logo = require('./assets/img/react_logo.svg');
//   const handleDrawerToggle = () => {
//     this.setState({ mobileOpen: !this.state.mobileOpen });
//   };
//   const state = {
//     mobileOpen: false
//   };
//   return (
//     <div className="App">
//       <Sidebar
//         routes={dashboardRoutes}
//         logoText={'Drunkcoding'}
//         logo={logo}
//         image={image}
//         handleDrawerToggle={handleDrawerToggle}
//         open={state.mobileOpen}
//         color="blue"
//       // {...rest}
//       />
//     </div>
//   );
// }

export default createRouter;
