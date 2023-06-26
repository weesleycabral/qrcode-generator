import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as saveAs from 'file-saver';
import html2canvas from 'html2canvas';
// import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public valor: any;

  constructor() {}

  ngOnInit(): void {}

  downloadQRCode() {}
}
