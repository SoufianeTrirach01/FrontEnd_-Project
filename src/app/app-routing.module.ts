import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './component/signup-client/signup-client.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpCompanyComponent } from './component/sign-up-company/sign-up-company.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  {path:'registerClient',component:SignupClientComponent},
  {path:'registerCompany',component:SignUpCompanyComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'',component:HomesComponent},

  { path: 'company', loadChildren: () => import('./societe/societe.module').then(m => m.SocieteModule) },
  { path: 'societe', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
