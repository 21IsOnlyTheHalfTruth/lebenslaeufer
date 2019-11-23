import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Position } from '../shared/models/position';
@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {
  @Output() submitData: EventEmitter<Array<Position>> = new EventEmitter()

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
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.positionForm = new FormGroup({
      positionLine: this.formBuilder.array([
        this.initPos()])
    });

  }



  initPos() {
    return this.formBuilder.group({
      description: [''],
      company: ['']
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
      positionsArr.push(new Position(posLine.value.description, posLine.value.company));
    }
    this.submitData.emit(positionsArr);

  }

}
