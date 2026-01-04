import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFiveComponent } from './module-five.component';

describe('ModuleFiveComponent', () => {
  let component: ModuleFiveComponent;
  let fixture: ComponentFixture<ModuleFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
