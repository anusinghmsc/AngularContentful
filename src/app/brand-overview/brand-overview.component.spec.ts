import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandOverviewComponent } from './brand-overview.component';

describe('BrandOverviewComponent', () => {
  let component: BrandOverviewComponent;
  let fixture: ComponentFixture<BrandOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
