import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'data', component: DataComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const appRoutes = RouterModule.forRoot(routes, { useHash: true });
