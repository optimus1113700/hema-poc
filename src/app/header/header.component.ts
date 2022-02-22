import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TemplateFormComponent } from '../template-form/template-form.component';

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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    { tileName: 'Jira', link: 'https://jira.com', rows: 1, image: 'assets/images/Jira.png', cols: 3, details: 'Jira Software is part of a family of products designed to help teams of all types manage work. Originally, Jira was designed as a bug and issue tracker.' },
    { tileName: 'Git', link: 'https://gmail.com', rows: 2, image: 'https://blogcdn.gmass.co/blog/wp-content/uploads/2020/04/Featured-image-hosted-vs-embedded-images-104kb.png', cols: 1, details: 'Git is a free and open source distributed version control system .' },
    { tileName: 'Gmail', link: 'https://stash.com', rows: 1, image: 'https://cdn-media-1.freecodecamp.org/images/VQhi-KgyeBh6jegrDc2zaLOGxsBWq0Bw5dNq', cols: 1, details: 'Gmail is a free email service provided by Google' },
    { tileName: 'Jira', link: 'https://jira.com', rows: 1, image: 'assets/images/Jira.png', cols: 2, details: 'Jira Software is part of a family of products designed to help teams of all types manage work. Originally, Jira was designed as a bug and issue tracker.' },
  ]

  openTemplateForm() {
    const dialogRef = this.dialog.open(TemplateFormComponent, {
      disableClose: true,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.tiles.push(result);
    });
  }

}
