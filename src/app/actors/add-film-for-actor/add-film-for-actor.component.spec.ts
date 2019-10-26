import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmForActorComponent } from './add-film-for-actor.component';

describe('AddFilmForActorComponent', () => {
  let component: AddFilmForActorComponent;
  let fixture: ComponentFixture<AddFilmForActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilmForActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmForActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
