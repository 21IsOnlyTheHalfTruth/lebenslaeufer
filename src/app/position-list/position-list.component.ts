import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Position } from '../shared/models/position';
import { DataFetchService } from '../shared/service/data-fetch.service';
@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {
  positionForm: FormGroup;

  /* QUILL EDITOR OPTIONS */

  public editorContent = '<h3>Type Something...</h3>';

  editorOptions = {
    toolbar: [[{ 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    ['clean']
    ]
    /* QUILL EDITOR OPTIONS END */

  };
  constructor(private formBuilder: FormBuilder, private dfs: DataFetchService) {

  }
  ngOnInit() {
    this.positionForm = new FormGroup({
      positionLine: this.formBuilder.array([
        this.initPos()])
    });
   this.dfs.fetchData.subscribe(() => {
    this.onSubmit();
    })
  }



  initPos() {
    return this.formBuilder.group({
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
      company: ['agentex GmbH'],
      role: ['Projektleiter'],
      from: ['2010'],
      to: ['2019']

    });
  }
  addPos() {
    const control = <FormArray>this.positionForm.controls['positionLine'];
    control.push(this.initPos());
  }
  removePos(i: number) {
    const control = <FormArray>this.positionForm.controls['positionLine'];
    control.removeAt(i);
  }

   onSubmit() {
    let formArr = <FormArray>this.positionForm.get('positionLine');
    let positionsArr: Array<Position> = [];
    for (let i = 0; i < formArr.length; ++i) {
      let posLine = formArr.at(i);
      positionsArr.push(new Position(posLine.value.company,posLine.value.from, posLine.value.to, posLine.value.role, posLine.value.description));
    }
    this.dfs.submitPosArr(positionsArr)
    
  }

}
