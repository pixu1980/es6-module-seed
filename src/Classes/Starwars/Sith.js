import ForcePerson from './ForcePerson';

export default class Sith extends ForcePerson {
  constructor(firstName, lastName, gender = 'male', forceSide = 'dark', midiChlorian = 0) {
    super(firstName, lastName, gender, forceSide, midiChlorian);
  }

  toString() {
    return `Sith Lord; ` + super.toString();
  }
}
