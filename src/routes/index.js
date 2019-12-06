//import Dashboard from '../layouts/Dashboard.jsx';
import Loader from '../views/loaders';

const Dashboard = Loader(() =>
  import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard/Dashboard')
);

export default [{ path: '/', component: Dashboard }];
