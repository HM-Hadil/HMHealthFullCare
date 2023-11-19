import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPoidsComponent } from './consulter-poids.component';

describe('ConsulterPoidsComponent', () => {
  let component: ConsulterPoidsComponent;
  let fixture: ComponentFixture<ConsulterPoidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPoidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
