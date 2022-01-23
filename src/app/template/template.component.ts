import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  templateForm = new FormGroup({
    tileName: new FormControl(),
    link: new FormControl(),
    rows: new FormControl(),
    image : new FormControl(),
    columns: new FormControl(),
    details : new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }
  
  save(){
    console.log(this.templateForm.value);
  }

  resetForm(){
    this.templateForm.reset();
  }

  clearLink(){
    this.templateForm.controls['link'].reset()
  }

}
