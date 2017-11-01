import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {ProfitcalculatorService} from './profitcalculator.service';
import { DonateComponent } from './donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProfitcalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
