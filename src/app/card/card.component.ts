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

  cardList = [
    {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira 1",
      image: "../../assets/images/Jira.png"
    },
    {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira 2",
      image: "../../assets/images/Jira.png"
    }, {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira 3",
      image: "../../assets/images/Jira.png"
    }, {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira 4",
      image: "../../assets/images/Jira.png"
    }, {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira 5",
      image: "../../assets/images/Jira.png"
    }
  ]

  ngOnInit(): void {
  }

  openWidgetModal() {
    const dialogRef = this.dialog.open(ModalWidgetComponent, {
      width: '25%',
      disableClose: true,
      data: {},
    });
  }
}

