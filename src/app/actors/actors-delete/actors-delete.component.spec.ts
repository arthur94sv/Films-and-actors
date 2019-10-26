import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsDeleteComponent } from './actors-delete.component';

describe('ActorsDeleteComponent', () => {
  let component: ActorsDeleteComponent;
  let fixture: ComponentFixture<ActorsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
