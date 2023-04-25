import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyManagerAddDialogComponent } from './proxy-manager-add-dialog.component';

describe('ProxyManagerAddDialogComponent', () => {
  let component: ProxyManagerAddDialogComponent;
  let fixture: ComponentFixture<ProxyManagerAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyManagerAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxyManagerAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
