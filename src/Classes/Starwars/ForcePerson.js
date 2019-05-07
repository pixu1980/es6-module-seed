import Person from '../Person';

export default class ForcePerson extends Person {
  constructor(firstName, lastName, gender = 'male', forceSide = 'bright', midiChlorian = 0) {
    super(firstName, lastName, gender);

    this._forceSide = forceSide;
    this._midiChlorian = midiChlorian;
  }

  get forceSide() {
    return this._forceSide;
  }

  set forceSide(value) {
    this._forceSide = value;
  }

  get midiChlorian() {
    return this._midiChlorian;
  }

  set midiChlorian(value) {
    this._midiChlorian = value;
  }
}
