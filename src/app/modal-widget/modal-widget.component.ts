import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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


  constructor(public dialogRef: MatDialogRef<ModalWidgetComponent>,
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  save() {
    // api call will be made here.
    console.log(this.modalForm.value)
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
