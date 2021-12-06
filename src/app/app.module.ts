import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { VsBranchComponent } from './vs-branch/vs-branch.component';
import { FeatursComponent } from './featurs/featurs.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    VsBranchComponent,
    FeatursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
