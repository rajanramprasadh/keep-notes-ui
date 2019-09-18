import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesSpaceComponent } from './notes-space/notes-space.component';
import { NotesComponent } from './notes-space/notes/notes.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesSpaceComponent,
    NotesComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
