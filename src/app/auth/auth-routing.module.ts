import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registro', component: RegistroComponent},
      { path: 'login', component: LoginComponent},
      { path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes)
  ]
})
export class AuthRoutingModule { }
