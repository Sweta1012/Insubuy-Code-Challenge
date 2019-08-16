import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { DisplayPlansComponent } from './components/display-plans/display-plans.component';
import { ComparePlansComponent } from './components/compare-plans/compare-plans.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { CompareListComponent } from './components/compare-list/compare-list.component';


const routes: Routes = [
  {path: 'quotes', component: QuoteFormComponent},
  {path: 'insubuyplans', component: QuoteListComponent},
  {path: 'compareplans', component: CompareListComponent},
  {path: '', redirectTo: '/quotes', pathMatch: 'full'},
  {path: '**', component: QuoteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
