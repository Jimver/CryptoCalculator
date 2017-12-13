import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProfitcalculatorService } from './services/profitcalculator.service';
import { DonateComponent } from './donate/donate.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MaterialModule} from './material/material.module';
import {SidenavComponent} from './sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appRoutes} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {ConverterComponent} from './converter/converter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, RouterTestingModule.withRoutes(appRoutes), FormsModule, HttpClientTestingModule, MaterialModule ],
      declarations: [
        AppComponent,
        DonateComponent,
        CalculatorComponent,
        ConverterComponent,
        SidenavComponent,
        HomeComponent,
        PagenotfoundComponent
      ],
      providers: [ ProfitcalculatorService ]
    }).compileComponents();
    TestBed.get(Router).initialNavigation();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.example-app-name').textContent).toContain('CryptoCalculator');
  }));
});
