import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BillingModule } from './features/billing/billing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BillingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
