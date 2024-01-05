import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFountComponent } from './pages/not-fount/not-fount.component';
import { BodyComponent } from './shared/body/body.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: BodyComponent, // Componente con el diseño común
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent, canActivate: [AuthGuard]
            },
            {
                path: 'reports',
                component: ReportsComponent, canActivate: [AuthGuard]
            },
        ]
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
