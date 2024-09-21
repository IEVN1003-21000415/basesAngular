import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepolisComponent } from './cinepolis.component';

describe('CinepolisComponent', () => {
  let component: CinepolisComponent;
  let fixture: ComponentFixture<CinepolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinepolisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinepolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
