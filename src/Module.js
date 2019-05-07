import Jedi from './Classes/Starwars/Jedi';
import Sith from './Classes/Starwars/Sith';

/**
 * constructs Module class
 * @class Module
 * @classdesc Module ES6 Example
 * @public
 */
export default class Module {
  constructor() {
    this.init();
  }

  /**
   * initialize all
   * @memberOf Module
   * @method init
   * @instance
   */
  init() {
    // Place your module initialization code here
    const ObiWanKenobi = new Jedi('Obi Wan', 'Kenobi', 'male', 'bright', 13400);
    const LukeSkywalker = new Jedi('Luke', 'Skywalker', 'male', 'bright', 14500);

    const AnakinSkywalker = new Jedi('Anakin', 'Skywalker', 'male', 'bright', 27700);
    const DarthVader = new Sith('Darth', 'Vader', 'male', 'dark', 27700);

    console.log(`A long time ago in a galaxy far far away......`);

    console.log(`
      ${ObiWanKenobi.toString()}
      was the master of
      ${AnakinSkywalker.toString()}
      and
      ${LukeSkywalker.toString()}
    `);

    console.log(`before new hopes...`);

    console.log(`
      ${AnakinSkywalker.toString()}
      passed to the dark-side becoming
      ${DarthVader.toString()}
    `);
  }
}
