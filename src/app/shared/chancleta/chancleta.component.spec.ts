import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChancletaComponent } from './chancleta.component';

describe('ChancletaComponent', () => {
  let component: ChancletaComponent;
  let fixture: ComponentFixture<ChancletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChancletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChancletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
