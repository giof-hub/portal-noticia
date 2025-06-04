import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerAnnounceComponent } from './container-announce.component';


describe('ContainerAnnounceComponent', () => {
  let component: ContainerAnnounceComponent;
  let fixture: ComponentFixture<ContainerAnnounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerAnnounceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
