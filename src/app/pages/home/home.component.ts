import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public valor = '';
  public myAngularxQrCode: string = '';
  public qrCodeDownloadLink: SafeUrl = '';

  constructor() {}

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
    console.log(this.myAngularxQrCode);
  }

  ngOnInit(): void {}

  // downloadQRCode() {
  //   console.log(this.valor.valueOf);
  //   const link = document.createElement('a');
  //   link.href = this.valor;
  //   link.download = 'qrcode.png';
  //   link.click();
  // }
}
