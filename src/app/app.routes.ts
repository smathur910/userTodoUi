import { Routes } from '@angular/router';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authInterceptor } from './core/auth.interceptor';
import { authGuard } from './guards/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'register',
        component: UserRegisterComponent
      },
    {
      path: 'login',
      component: UserAuthComponent
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard],
              }
        ]
      }
    
  ];
  
