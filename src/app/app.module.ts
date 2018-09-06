import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Input } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AuthGuard ,IsLoggedIn} from './gaurds/index';
import { AppComponent } from './app.component';
import { LoginComponent,HomeComponent,HeaderComponent,FooterComponent} from './modules/admin-module/index';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './modules/website-module/index';
import {AuthenticationService ,HomeService} from './services/index';
import { TokenInterceptor } from './intercepters/index';
import { PanelComponent,ModalComponent} from './modules/ui-components/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PanelComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    /*****/
  ],
  providers: [AuthGuard,IsLoggedIn,AuthenticationService,HomeService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  exports:[PanelComponent,ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
