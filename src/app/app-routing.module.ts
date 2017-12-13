import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ConverterComponent} from './converter/converter.component';

export const appRoutes: Routes = [
  {
    path: '', component: SidenavComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'calculator', component: CalculatorComponent},
      {path: 'converter', component: ConverterComponent}
    ]
  },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
