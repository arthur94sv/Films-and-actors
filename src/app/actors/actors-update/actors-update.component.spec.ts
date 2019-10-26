import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsUpdateComponent } from './actors-update.component';

describe('ActorsUpdateComponent', () => {
  let component: ActorsUpdateComponent;
  let fixture: ComponentFixture<ActorsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
