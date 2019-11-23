import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActorForFilmComponent } from './add-actor-for-film.component';

describe('AddActorForFilmComponent', () => {
  let component: AddActorForFilmComponent;
  let fixture: ComponentFixture<AddActorForFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActorForFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActorForFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
