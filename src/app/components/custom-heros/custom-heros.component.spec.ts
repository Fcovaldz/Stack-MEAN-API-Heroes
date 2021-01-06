import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHerosComponent } from './custom-heros.component';

describe('CustomHerosComponent', () => {
  let component: CustomHerosComponent;
  let fixture: ComponentFixture<CustomHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
