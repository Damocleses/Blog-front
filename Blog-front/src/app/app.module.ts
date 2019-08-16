import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { LoginModule } from './login/login.module';
import { ManagerModule } from './manager/manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    LoginModule,
    ManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
