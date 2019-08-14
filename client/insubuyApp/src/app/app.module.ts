import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    ComparePlansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetQuotesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
