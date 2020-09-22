import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BienvenidoPage } from './bienvenido.page';

describe('BienvenidoPage', () => {
  let component: BienvenidoPage;
  let fixture: ComponentFixture<BienvenidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BienvenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
