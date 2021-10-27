import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadCalculatorComponent } from './load-calculator/load-calculator.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { CompComponent } from './comp/comp.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EMICalculatorComponent } from './calculator/emi-calculator/emi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadCalculatorComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    CompComponent,
    CalculatorComponent,
    EMICalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
