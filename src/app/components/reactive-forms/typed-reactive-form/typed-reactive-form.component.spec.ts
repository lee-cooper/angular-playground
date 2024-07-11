import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypedReactiveFormComponent } from './typed-reactive-form.component';

describe('TypedReactiveFormComponent', () => {
  let component: TypedReactiveFormComponent;
  let fixture: ComponentFixture<TypedReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedReactiveFormComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TypedReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
