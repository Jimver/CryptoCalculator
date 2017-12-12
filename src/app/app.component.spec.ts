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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, FormsModule, HttpClientTestingModule, MaterialModule ],
      declarations: [
        AppComponent,
        DonateComponent,
        CalculatorComponent,
        SidenavComponent
      ],
      providers: [ ProfitcalculatorService ]
    }).compileComponents();
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
    expect(compiled.querySelector('h1').textContent).toContain('CryptoCalculator');
  }));
});
