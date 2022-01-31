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

  editFlag: boolean = false;

  tileIndex: number;

  tiles: Tile[] = [
    { tileName: 'Jira', link: 'https://jira.com', rows: 1, image: '', cols: 3, details: 'Jira' },
    { tileName: 'Gmail', link: 'https://gmail.com', rows: 2, image: '', cols: 1, details: 'Jira' },
    { tileName: 'Stash', link: 'https://stash.com', rows: 1, image: '', cols: 1, details: 'Jira' },
    { tileName: 'Stash', link: 'https://stash.com', rows: 1, image: '', cols: 2, details: 'Jira' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  add() {
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
    this.editFlag = !this.editFlag;
  }

  save() {
    console.log(this.tileIndex);
    const editObj = {
      tileName: this.templateForm.get('tileName').value,
      link: this.templateForm.get('link').value,
      rows: this.templateForm.get('rows').value,
      cols: this.templateForm.get('columns').value,
      details: this.templateForm.get('details').value
    };
    this.tiles[this.tileIndex] = editObj;
    this.templateForm.reset();
    this.editFlag = !this.editFlag;

  }

  clearLink() {
    this.templateForm.controls['link'].reset()
  }

  doubleClickFunction(tile, i) {
    this.editFlag = !this.editFlag;
    this.templateForm.controls['tileName'].setValue(tile.tileName);
    this.templateForm.controls['link'].setValue(tile.link);
    this.templateForm.controls['rows'].setValue(tile.rows);
    this.templateForm.controls['columns'].setValue(tile.cols);
    this.templateForm.controls['details'].setValue(tile.details);
    this.tileIndex = i;
  }

}
