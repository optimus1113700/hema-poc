import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('fileInput') el: ElementRef;

  imageUrl: any = '';

  editFile: boolean = true;

  removeUpload: boolean = false;

  tiles: Tile[] = [
    { tileName: 'Jira', link: 'https://jira.com', rows: 1, image: '', cols: 3, details: 'Jira' },
    { tileName: 'Gmail', link: 'https://gmail.com', rows: 2, image: '', cols: 1, details: 'Jira' },
    { tileName: 'Stash', link: 'https://stash.com', rows: 1, image: '', cols: 1, details: 'Jira' },
    { tileName: 'Stash', link: 'https://stash.com', rows: 1, image: '', cols: 2, details: 'Jira' }
  ]

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  add() {
    console.log(this.templateForm.value);
    const obj = {
      tileName: this.templateForm.get('tileName').value,
      link: this.templateForm.get('link').value,
      image: this.templateForm.get('image').value,
      rows: this.templateForm.get('rows').value,
      cols: this.templateForm.get('columns').value,
      details: this.templateForm.get('details').value
    };
    this.tiles.push(obj);
  }

  resetForm() {
    this.templateForm.reset();
    this.editFlag = !this.editFlag;
    this.fileName = '';

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
    this.templateForm.controls['link'].reset();
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

  fileName: any = '';

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    this.fileName = `${file.name}`;

    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.templateForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.templateForm.patchValue({
      file: [null]
    });
  }
}
