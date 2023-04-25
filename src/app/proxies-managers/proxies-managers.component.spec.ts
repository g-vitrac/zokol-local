import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxiesManagersComponent } from './proxies-managers.component';

describe('ProxiesManagersComponent', () => {
  let component: ProxiesManagersComponent;
  let fixture: ComponentFixture<ProxiesManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxiesManagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxiesManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
