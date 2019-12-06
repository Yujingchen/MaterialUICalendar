import Loadable from 'react-loadable';
import loading from './ComponentLoader';

const Loader = (loader: any) =>
  Loadable({
    loader,
    loading,
    timeout: 10000,
  });

export default Loader;
