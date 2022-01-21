import { ModalWidgetComponent } from './../modal-widget/modal-widget.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  cardList = [
    {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira ",
      image: "../../assets/images/Jira.png"
    },
    {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira ",
      image: "../../assets/images/Jira.png"
    }, {
      url: "https://material.angular.io/components/card/examples",
      name: "Jira ",
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

    dialogRef.afterClosed().subscribe(
      data => {
        this.cardList.push(data);
        console.log(this.cardList);
      }
    );
  }

  editCard(card,i) {
    const dialogRef = this.dialog.open(ModalWidgetComponent, {
      width: '25%',
      disableClose: true,
      data: {
        cardData : card
      },
    });

    dialogRef.afterClosed().subscribe(
      data => {
        this.cardList[i].url = data.url;
        this.cardList[i].name = data.name;
      }
    );
  }
}

