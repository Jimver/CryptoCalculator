import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import {MaterialModule} from '../material/material.module';
import {DonateComponent} from '../donate/donate.component';
import {CalculatorComponent} from '../calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {appRoutes} from '../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from '../home/home.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {Router} from '@angular/router';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule.withRoutes(appRoutes), HttpClientTestingModule, MaterialModule, FormsModule],
      declarations: [ SidenavComponent, DonateComponent, CalculatorComponent, HomeComponent, PagenotfoundComponent ]
    })
    .compileComponents();
    TestBed.get(Router).initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
