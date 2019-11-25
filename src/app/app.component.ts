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

  public printDoc= false;

  constructor(private dfs: DataFetchService) {
  }

  pdfButtonpressed(){
    this.dfs.submitButtonPressed();
    setTimeout( ()=>{ //to be changet to obseravble!
      this.arrdataForHMTL = this.dfs.getPosArr();
      this.contdataForHMTL = this.dfs.getContactData();
      this.printDoc =true;
      this.generatePdf()

    }, 10)
  }

 /*  submitDataHandler(posArr: Array<Position>) { // will be removed
  } */


  generatePdf() {
   
    setTimeout( ()=>{
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
   
      doc.save("test.pdf")
    }, 500)
    
  //  let documentDefinition = this.getDocumentDefinition(this.arrdataForHMTL)
   // pdfMake.createPdf(documentDefinition).download();
  }

  
  //DOCDEFINTION
  getDocumentDefinition(posArr: Array<Position>) {
        //sessionStorage.setItem('resume', JSON.stringify(this.resume));
        return {
          content: [
            {
              text: 'RESUME',
              bold: true,
              fontSize: 15,
              alignment: 'center',
              margin: [0, 0, 0, 20]
            },
            
             /* columns: [
                [{
                  text: this.resume.name,
                  style: 'name'
                },
                {
                  text: this.resume.address
                },
                {
                  text: 'Email : ' + this.resume.email,
                },
                {
                  text: 'Contant No : ' + this.resume.contactNo,
                },
                {
                  text: 'GitHub: ' + this.resume.socialProfile,
                  link: this.resume.socialProfile,
                  color: 'blue',
                } */
              
              
                {
                  text: 'Experience',
                  style: 'header'
                },
                this.getExperienceObject(posArr),
          
                
              [
                 // this.getProfilePicObject()
                ] 
              
            ],
          styles: {
            name: {
              fontSize: 16,
              bold: true
            }
          }
        }
  }

      //return experience
      getExperienceObject(positionArr: Array<Position>) {
        const pos = [];
        positionArr.forEach(position => {
          pos.push(
            [{
              columns: [
                [{
                  text: position.company,
                  style: 'Firma'
                },
                {
                  text: position.description,
                },
                {
                  text: position.role,
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
            ]
          }
        };
      }



}
