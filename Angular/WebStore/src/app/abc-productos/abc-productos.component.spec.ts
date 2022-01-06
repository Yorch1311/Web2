import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcProductosComponent } from './abc-productos.component';

describe('AbcProductosComponent', () => {
  let component: AbcProductosComponent;
  let fixture: ComponentFixture<AbcProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
