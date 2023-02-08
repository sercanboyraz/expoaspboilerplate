import { L } from '../../lib/utility';
import Dashboard from '../../scenes/dashboard/dashboards';
import RegisterScreen from '../../scenes/login/component/RegisterScreen';
import ResetPasswordScreen from '../../scenes/login/component/ResetPasswordScreen';
import Login from '../../scenes/login/login';
import Roles from '../../scenes/role/roles';
import Users from '../../scenes/user/users';

export const appRouters: any[] = [
    {
        name: 'home',
        permission: 'Pages.Dashboard',
        title: 'Home',
        component: Dashboard,
        showInMenu: true,
    },
    {
        name: 'users',
        permission: 'Pages.Users',
        title: 'Users',
        component: Users,
        showInMenu: true,
    },
    {
        name: 'Roles',
        permission: 'Pages.Roles',
        title: 'Roles',
        component: Roles,
        showInMenu: true,
    },
    {
        name: 'login',
        permission: '',
        title: 'Login',
        component: Login,
        showInMenu: false,
        noHeader:true
    },
    {
        name: 'resetPasswordScreen',
        permission: '',
        title: 'ResetPasswordScreen',
        component: ResetPasswordScreen,
        showInMenu: false,
        noHeader:true
    },
    {
        name: 'registerScreen',
        permission: '',
        title: 'RegisterScreen',
        component: RegisterScreen,
        showInMenu: false,
        noHeader:true
    }
];

export const routers = [...appRouters];
