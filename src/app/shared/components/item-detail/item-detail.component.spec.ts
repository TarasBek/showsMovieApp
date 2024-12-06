import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { ItemDetailComponent } from './item-detail.component';


describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;
  let store: Store;
  let location: Location;

  beforeEach(async () => {
    const storeStub = {
      select: jasmine.createSpy().and.returnValue(of(null)),
      dispatch: jasmine.createSpy()
    };

    const locationStub = {
      back: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      declarations: [ItemDetailComponent],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: Location, useValue: locationStub }
      ],
      imports: [StoreModule.forRoot({})]
    }).compileComponents();

    store = TestBed.inject(Store);
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to top on init', () => {
    spyOn(window, 'scrollTo');
    component.ngOnInit();
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('should navigate back on exit', () => {
    component.onExit();
    expect(location.back).toHaveBeenCalled();
  });

  
});