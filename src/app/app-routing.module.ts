import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadCalculatorComponent } from './load-calculator/load-calculator.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"loanCalc",
    component: LoadCalculatorComponent
  },
  {
    path:"register",
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
