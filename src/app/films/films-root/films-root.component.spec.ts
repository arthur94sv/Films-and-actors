import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsRootComponent } from './films-root.component';

describe('FilmsRootComponent', () => {
  let component: FilmsRootComponent;
  let fixture: ComponentFixture<FilmsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
