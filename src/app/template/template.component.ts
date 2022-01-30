import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Tile {
  tileName?: string;
  link?: string;
  rows?: number;
  image?: any;
  cols?: number;
  details?: string;
  color?: string;
  text?: string
}


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
    image: new FormControl(),
    columns: new FormControl(),
    details: new FormControl()
  });



  tiles: Tile[] = [
    { tileName: 'Jira', link: 'https://jira.com', rows: 1, image: '', cols: 3, details: 'Jira' },
    { tileName: 'Gmail', link: 'https://gmail.com', rows: 2, image: '', cols: 1, details: 'Jira' },
    { tileName: 'Stash', link: 'https://stash.com', rows: 1, image: '', cols: 1, details: 'Jira' },
    { tileName: 'Stash', link: 'https://stash.com', rows: 1, image: '', cols: 2, details: 'Jira' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.templateForm.value);
    const obj = {
      tileName: this.templateForm.get('tileName').value,
      link: this.templateForm.get('link').value,
      rows: this.templateForm.get('rows').value,
      cols: this.templateForm.get('columns').value,
      details: this.templateForm.get('details').value
    };
    this.tiles.push(obj);
  }

  resetForm() {
    this.templateForm.reset();
  }

  clearLink() {
    this.templateForm.controls['link'].reset()
  }

}
