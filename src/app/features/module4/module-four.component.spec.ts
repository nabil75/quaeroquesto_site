import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourComponent } from './module-four.component';

describe('ModuleFourComponent', () => {
  let component: ModuleFourComponent;
  let fixture: ComponentFixture<ModuleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
