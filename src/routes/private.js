import FirstPage from '../pages/firstPage';
import MainPage from '../pages/mainPage';
import UserPage from '../pages/userPage';

const privateRoutes = [
  {
    path: '/firstPage',
    component: FirstPage,
    exact: true,
    backUrl: '/',
  }, {
    path: '/mainPage',
    component: MainPage,
    exact: true,
    backUrl: '/',
  }, {
    path: '/userPage',
    component: UserPage,
    exact: true,
    backUrl: '/',
  },
];

export default privateRoutes;