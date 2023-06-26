import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QrCodeModule } from 'ng-qrcode';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, QrCodeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
