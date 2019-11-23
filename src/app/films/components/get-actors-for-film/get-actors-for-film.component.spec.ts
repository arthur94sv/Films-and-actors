import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetActorsForFilmComponent } from './get-actors-for-film.component';

describe('GetActorsForFilmComponent', () => {
  let component: GetActorsForFilmComponent;
  let fixture: ComponentFixture<GetActorsForFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetActorsForFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetActorsForFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
