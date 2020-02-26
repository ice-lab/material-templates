import BasicLayout from '@/layouts/BasicLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
