import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFactComponent } from './weather-fact.component';

describe('WeatherFactComponent', () => {
  let component: WeatherFactComponent;
  let fixture: ComponentFixture<WeatherFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherFactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
