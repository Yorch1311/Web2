import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMenubarComponent } from './store-menubar.component';

describe('StoreMenubarComponent', () => {
  let component: StoreMenubarComponent;
  let fixture: ComponentFixture<StoreMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
