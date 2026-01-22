import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTilesComponent } from './feature-tiles.component';

describe('FeatureTilesComponent', () => {
  let component: FeatureTilesComponent;
  let fixture: ComponentFixture<FeatureTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
