import Home from './pages/home';
import Contact from './pages/contact';
import Services from './pages/services';

const routes = [
  {
    path: '/',
    element: Home,
    exact: true,
  },
  {
    path: '/contact',
    element: Contact,
    exact: true,
  },
  {
    path: '/services',
    element: Services,
    exact: true,
  },
];

export default routes;