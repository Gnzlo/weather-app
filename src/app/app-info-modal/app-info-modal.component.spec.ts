import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppInfoModalComponent } from './app-info-modal.component';

describe('AppInfoModalComponent', () => {
  let component: AppInfoModalComponent;
  let fixture: ComponentFixture<AppInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
