import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface CardModel {
  url: string;
  name: string;
  picture: any;
}

@Component({
  selector: 'app-modal-widget',
  templateUrl: './modal-widget.component.html',
  styleUrls: ['./modal-widget.component.scss']
})
export class ModalWidgetComponent implements OnInit {

  modalForm = new FormGroup({
    url: new FormControl(),
    name: new FormControl(),
    picture: new FormControl(),
  });

  fileInfo: string;

  cardList: CardModel[] = [];


  constructor(public dialogRef: MatDialogRef<ModalWidgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.modalForm.controls['url'].setValue(this.data.cardData.url);
    this.modalForm.controls['name'].setValue(this.data.cardData.name);
  }

  cardDetails;

  save() {
    // api call will be made here.
    this.cardDetails = {
      url: this.modalForm.get('url').value,
      name: this.modalForm.get('name').value,
      picture: this.modalForm.get('picture').value,
    }
    this.close();
  }

  close(){
    this.dialogRef.close(this.cardDetails);
  }

  onFileSelect(input: HTMLInputElement): void {
    function formatBytes(bytes: number): string {
      const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const factor = 1024;
      let index = 0;

      while (bytes >= factor) {
        bytes /= factor;
        index++;
      }

      return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
    }

    const file = input.files[0];
    this.fileInfo = `${file.name} (${formatBytes(file.size)})`;
  }

}
