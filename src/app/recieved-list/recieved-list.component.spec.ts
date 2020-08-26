import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedListComponent } from './recieved-list.component';

describe('RecievedListComponent', () => {
  let component: RecievedListComponent;
  let fixture: ComponentFixture<RecievedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
