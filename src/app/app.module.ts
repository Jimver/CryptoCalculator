import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {ProfitcalculatorService} from './services/profitcalculator.service';
import { DonateComponent } from './donate/donate.component';
import {MaterialModule} from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DonateComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ProfitcalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
