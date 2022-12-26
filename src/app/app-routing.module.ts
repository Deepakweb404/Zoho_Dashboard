import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutEditorLeadComponent } from './layout-editor-lead/layout-editor-lead.component';
import { LeadsComponent } from './leads/leads.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'layout-edit', component: LayoutEditorLeadComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'leads', component: LeadsComponent },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ SignupComponent,LoginComponent , LayoutEditorLeadComponent , HomeComponent , PageNotFoundComponent , LeadsComponent]