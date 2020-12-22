import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'spiderDude', strength: 8},
      {id: 2, name: 'WonderWoman', strength: 24},
      {id: 3, name: 'superDude', strength: 55}
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove the indicated hero form the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      //Act: delete the last item in the array
      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero with the correct parameter - HEROES', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));

      component.heroes = HEROES;

      component.delete(HEROES[2]);

      //expect(mockHeroService.deleteHero).toHaveBeenCalled();

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
