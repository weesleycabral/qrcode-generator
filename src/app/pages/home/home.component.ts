import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public valor: any;

  constructor() {}

  ngOnInit(): void {}

  downloadQRCode() {
    const link = document.createElement('a');
    link.href = this.valor;
    link.download = 'qrcode.png';
    link.click();
  }
}
