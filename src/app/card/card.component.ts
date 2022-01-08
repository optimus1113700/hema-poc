import { ModalWidgetComponent } from './../modal-widget/modal-widget.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openWidgetModal(){
    const dialogRef = this.dialog.open(ModalWidgetComponent, {
      width: '25%',
      disableClose: true,
      data: {},
    });
  }
}

