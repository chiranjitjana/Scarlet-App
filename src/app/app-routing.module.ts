import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent,HomeComponent} from './modules/admin-module/index';
import { IndexComponent } from './modules/website-module/index';
import { AuthGuard ,IsLoggedIn} from './gaurds/index';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent , resolve: [IsLoggedIn]},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
