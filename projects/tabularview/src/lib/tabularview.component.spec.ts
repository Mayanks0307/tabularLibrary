import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularviewComponent } from './tabularview.component';

describe('TabularviewComponent', () => {
  let component: TabularviewComponent;
  let fixture: ComponentFixture<TabularviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
