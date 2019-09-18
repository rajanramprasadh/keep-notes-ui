import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes-space',
  templateUrl: './notes-space.component.html',
  styleUrls: ['./notes-space.component.css']
})
export class NotesSpaceComponent implements OnInit {

  @Input('noteDetails') noteDetailTemp: {
    title: string, 
    description: string
  };
  selectedTitle: string;

  noteDetails = [
    {title: 'Sample Title 1', description: 'Sample Description 1'},
    {title: 'Sample Title 2', description: 'Sample Description 2'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectTitle(noteTitle: any) {
    this.selectedTitle = noteTitle;
  }

}
