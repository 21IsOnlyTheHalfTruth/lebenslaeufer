import { Component, OnInit, ViewChild } from '@angular/core';
import { Position } from './shared/models/position';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  submitDataHandler(posArr: Array<Position>) {
    console.info(posArr);
    this.generatePdf(posArr)
  }


  generatePdf(posArr: Array<Position>) {
    
/*     const documentDefinition = this.getDocumentDefinition(posArr);
    pdfMake.createPdf(documentDefinition).download(); */
  }




  /*
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
                } 
              
              
                {
                  text: 'Experience',
                  style: 'header'
                },
                this.getExperienceObject(posArr),
          
                
              [
                  this.getProfilePicObject()
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

  

*/
}
