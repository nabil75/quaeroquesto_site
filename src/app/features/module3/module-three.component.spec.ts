import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreeComponent } from './module-three.component';

describe('ModuleThreeComponent', () => {
  let component: ModuleThreeComponent;
  let fixture: ComponentFixture<ModuleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
