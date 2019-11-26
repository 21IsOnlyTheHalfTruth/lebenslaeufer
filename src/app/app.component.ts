import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Position } from './shared/models/position';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jsPDF from 'jspdf'
import { DataFetchService } from './shared/service/data-fetch.service';
import { ContactData } from './shared/models/contactData';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  public arrdataForHMTL: Array<Position>;
  public contdataForHMTL: ContactData;

  public printDoc= false; // show printable HTML site for chrome PDF print engine

  constructor(private dfs: DataFetchService) {
  }

  pdfButtonpressed(){
    this.dfs.submitButtonPressed();
    setTimeout( ()=>{ //to be changed to obseravble!
      this.arrdataForHMTL = this.dfs.getPosArr();
      this.contdataForHMTL = this.dfs.getContactData();
      this.printDoc =true;
      this.generatePdf()

    }, 10)
  }

 /*  submitDataHandler(posArr: Array<Position>) { // will be removed
  } */


  generatePdf() {
   
    setTimeout( ()=>{ //replace with observable or promise!
      //converting frontend to PDF with JS PDF
      var doc = new jsPDF();
    
      const pdfTable = this.pdfTable.nativeElement;

      const specialElementHandlers = {
        '#editor': function (element, renderer) {
          return true;
        }};
      
      doc.fromHTML(pdfTable.innerHTML, 15, 15, {
        width: 190,
        'elementHandlers': specialElementHandlers
      });
   
      doc.save("jspdf.pdf")
    }, 500)
    
   let documentDefinition = this.getDocumentDefinition(this.arrdataForHMTL, this.contdataForHMTL)
    pdfMake.createPdf(documentDefinition).download('makePDF'); //printing pdf with makepdf
  }

  
  //DOCDEFINTION for MakePDF library
  getDocumentDefinition(posArr: Array<Position>, contactData: ContactData) {
        //sessionStorage.setItem('resume', JSON.stringify(this.resume));
        return {
          content: [
            {
              text: 'Lebenslauf',
              bold: true,
              fontSize: 15,
              alignment: 'center',
              margin: [0, 0, 0, 20]
            }, {
            
              columns: [
                {
                  text: contactData.name,
                  style: 'name'
                },
                {
                  text: contactData.street
                },
                {
                  text: 'Email : ' + contactData.email,
                },
                {
                  text: 'Contant No : ' + contactData.tel,
                }],
              },
                {
                  text: 'Positionen',
                  style: 'header',
                  alignment: 'left'
                },
            
               
                this.getExperienceObject(posArr),
                  
          ],
               styles: {
            name: {
              fontSize: 16,
              bold: true
            },
            header: {
              fontSize: 16,
              bold: true,
              alignment: 'center',
              margin: [0, 0, 0, 20]
            },
            fromToCompany: {
              width: '10%' ,
              fontSize: 16,
              bold: false,
              columnGap: 10
            }
            
          }
        }
  }

      //return experience, this function is used in the documentdefinition of makepdf above
      getExperienceObject(positionArr: Array<Position>) {
        const pos = [];
        positionArr.forEach(position => {
          pos.push(
            [{
              columns: [
                [{
                  text: position.from,
                  style: 'fromToCompany'},
                
                 { text: "-",
                  style: 'fromToCompany'
                },
                {
                  text: position.to,
                  style: 'fromToCompany'

                },
                {
                  text: position.company,
                  style: 'fromToCompany',
                  bold: true
                },
                {
                  text: position.role,
                  style: 'fromToCompany',
                  decoration: 'underline'

                },
                {
                  text: position.description,
                }]

              ]
            }]
          );
        });
        return {
          table: {
            widths: ['*'],
            body: [
              ...pos
            ],
                     
          },
          layout: {
            
            hLineColor: 'white',
            vLineColor: 'red'
          }
        };
      }



}
