import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasComponent } from './listado-noticias.component';

describe('ListadoNoticiasComponent', () => {
  let component: ListadoNoticiasComponent;
  let fixture: ComponentFixture<ListadoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
