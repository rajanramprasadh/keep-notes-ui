import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSpaceComponent } from './notes-space.component';

describe('NotesSpaceComponent', () => {
  let component: NotesSpaceComponent;
  let fixture: ComponentFixture<NotesSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
