import { TestBed, ComponentFixture, fakeAsync, tick, async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { Location } from '@angular/common'; //for Location
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          }
        }
      }
    };
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule //don't forget to add this because of ngModel
      ],
      declarations: [
        HeroDetailComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },
        {
          provide: HeroService,
          useValue: mockHeroService
        },
        {
          provide: Location,
          useValue: mockLocation
        }
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);

    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}));
  });

  it('should render hero name in an h2 tag', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  });

  it('should call updateHero when save is called', async(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();

    fixture.whenStable().then(() => {
      expect(mockHeroService.updateHero).toHaveBeenCalled();
    });
  }));

  /*it('should call updateHero when save is called', fakeAsync(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();
    tick(250);

    expect(mockHeroService.updateHero).toHaveBeenCalled();
  }));*/
});

//you can just use flush() instead of tick(250), it works.
