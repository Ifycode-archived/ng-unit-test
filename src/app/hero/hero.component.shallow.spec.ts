import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent (Shallow test)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(HeroComponent);
    //type fixture.componentInstance. to see the properties or methods on HeroComponent class
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'SuperDude',
      strength: 3
    };

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'SuperDude',
      strength: 3
    };
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    //dosen't work: expect(fixture.nativeElement.querySelector('a').textContent).toEqual('1 SuperDude');
  });
});
