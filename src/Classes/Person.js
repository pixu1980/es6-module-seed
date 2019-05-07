export default class Person {
  constructor(firstName, lastName, gender = 'male') {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  toString() {
    return JSON.stringify(this);
  }
}
