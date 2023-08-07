import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeMoedasComponent } from './listagem-de-moedas.component';

describe('ListagemDeMoedasComponent', () => {
  let component: ListagemDeMoedasComponent;
  let fixture: ComponentFixture<ListagemDeMoedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemDeMoedasComponent]
    });
    fixture = TestBed.createComponent(ListagemDeMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
