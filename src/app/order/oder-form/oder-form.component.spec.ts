import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderFormComponent } from './oder-form.component';

describe('OderFormComponent', () => {
  let component: OderFormComponent;
  let fixture: ComponentFixture<OderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
