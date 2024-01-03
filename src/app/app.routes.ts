import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFountComponent } from './pages/not-fount/not-fount.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'notfount',
        component: NotFountComponent
    },
    {
        path: '**',
        redirectTo: 'notfount',
        pathMatch: 'full'
    },
];
