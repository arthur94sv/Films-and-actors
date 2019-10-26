import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsAddComponent } from './actors-add.component';

describe('ActorsAddComponent', () => {
  let component: ActorsAddComponent;
  let fixture: ComponentFixture<ActorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
