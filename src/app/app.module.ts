import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent }  from './app.component';
import { CsvToJsonValidatorComponent } from './csv-to-json-validator/csv-to-json-validator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PapaParseModule
  ],
  declarations: [
    AppComponent,
    CsvToJsonValidatorComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
