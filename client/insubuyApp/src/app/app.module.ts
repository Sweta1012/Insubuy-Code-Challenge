import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuotesFilterPipe } from './shared/quotes-filter.pipe';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { DisplayPlansComponent } from './components/display-plans/display-plans.component';
import { ComparePlansComponent } from './components/compare-plans/compare-plans.component';

import { GetQuotesService } from './shared/services/get-quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    DisplayPlansComponent,
    ComparePlansComponent,
    QuotesFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GetQuotesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
