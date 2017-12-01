import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientHelper } from "./helpers/httpclient";
import { PanelModule } from "./components/panel/panel.module";
import { ListModule } from "./components/list/list.module";
import { MaterializeModule } from "angular2-materialize";

import 'rxjs/Rx';
import { WebsiteManager } from "app/manager/website-manager";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    ListModule,
    MaterializeModule
  ],
  providers: [HttpClientHelper, WebsiteManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
