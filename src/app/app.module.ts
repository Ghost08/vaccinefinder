import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { calendar,alarm , calendar2} from 'ngx-bootstrap-icons';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const icons = {
  alarm,
  calendar,
  calendar2
  
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons),
    Ng2SearchPipeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
