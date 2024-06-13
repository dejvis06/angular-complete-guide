import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFormModalComponent } from './invalid-form-modal.component';

describe('InvalidFormModalComponent', () => {
  let component: InvalidFormModalComponent;
  let fixture: ComponentFixture<InvalidFormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InvalidFormModalComponent]
    });
    fixture = TestBed.createComponent(InvalidFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
