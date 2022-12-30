import { L } from '../../lib/datamindUtility';
import Dashboard from '../../scenes/dashboard/dashboards';
import Roles from '../../scenes/role/roles';
import Users from '../../scenes/user/users';

export const appRouters: any = [
    {
        name: 'home',
        permission: 'Pages.Dashboard',
        title: 'Home',
        component: Dashboard,
    },
    {
        name: 'users',
        permission: 'Pages.Users',
        title: 'Users',
        component: Users,
    },
    {
        name: 'Roles',
        permission: 'Pages.Roles',
        title: 'Roles',
        component: Roles,
    }
];

export const routers = [...appRouters];
