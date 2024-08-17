import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvishomeComponent } from './avishome.component';

describe('AvishomeComponent', () => {
  let component: AvishomeComponent;
  let fixture: ComponentFixture<AvishomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvishomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvishomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
