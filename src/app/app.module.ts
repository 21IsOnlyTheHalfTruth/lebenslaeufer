import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {QuillModule} from 'ngx-quill'
import {} from '@angular/common'

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDataComponent } from './contact-data/contact-data.component';
import { PositionListComponent } from './position-list/position-list.component';
import { GPdfComponent } from './g-pdf/g-pdf.component'; //do i need this?



@NgModule({
  declarations: [
    AppComponent,
    ContactDataComponent,
    PositionListComponent,
    GPdfComponent

  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
