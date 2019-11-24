import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-g-pdf',
  templateUrl: './g-pdf.component.html',
  styleUrls: ['./g-pdf.component.scss']
})
export class GPdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 

}
