import Dashboard from '../views/Dashboard'
import All_students from "../views/Students/All_students";
const route = [
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

    {
        path: '/admin/all-students',
        name: 'All_students',
        component: All_students
    },

];
export default route;

