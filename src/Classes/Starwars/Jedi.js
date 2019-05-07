import ForcePerson from './ForcePerson';

export default class Jedi extends ForcePerson {
  constructor(firstName, lastName, gender = 'male', forceSide = 'bright', midiChlorian = 0) {
    super(firstName, lastName, gender, forceSide, midiChlorian);
  }

  toString() {
    return `Jedi Knight; ` + super.toString();
  }
}
