import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { DisplayPlansComponent } from './components/display-plans/display-plans.component';
import { ComparePlansComponent } from './components/compare-plans/compare-plans.component';


const routes: Routes = [
  {path: 'quotes', component: QuoteFormComponent},
  {path: 'insubuyplans', component: DisplayPlansComponent},
  {path: 'compareplans', component: ComparePlansComponent},
  {path: '', redirectTo: '/quotes', pathMatch: 'full'},
  {path: '**', component: QuoteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
