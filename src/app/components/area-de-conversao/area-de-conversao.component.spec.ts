import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeConversaoComponent } from './area-de-conversao.component';

describe('AreaDeConversaoComponent', () => {
  let component: AreaDeConversaoComponent;
  let fixture: ComponentFixture<AreaDeConversaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaDeConversaoComponent]
    });
    fixture = TestBed.createComponent(AreaDeConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
