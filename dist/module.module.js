'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var Person =
/*#__PURE__*/
function () {
  function Person(firstName, lastName) {
    var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'male';

    _classCallCheck(this, Person);

    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
  }

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify(this);
    }
  }, {
    key: "firstName",
    get: function get() {
      return this._firstName;
    },
    set: function set(value) {
      this._firstName = value;
    }
  }, {
    key: "lastName",
    get: function get() {
      return this._lastName;
    },
    set: function set(value) {
      this._lastName = value;
    }
  }, {
    key: "gender",
    get: function get() {
      return this._gender;
    },
    set: function set(value) {
      this._gender = value;
    }
  }]);

  return Person;
}();

var ForcePerson =
/*#__PURE__*/
function (_Person) {
  _inherits(ForcePerson, _Person);

  function ForcePerson(firstName, lastName) {
    var _this;

    var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'male';
    var forceSide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bright';
    var midiChlorian = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, ForcePerson);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForcePerson).call(this, firstName, lastName, gender));
    _this._forceSide = forceSide;
    _this._midiChlorian = midiChlorian;
    return _this;
  }

  _createClass(ForcePerson, [{
    key: "forceSide",
    get: function get() {
      return this._forceSide;
    },
    set: function set(value) {
      this._forceSide = value;
    }
  }, {
    key: "midiChlorian",
    get: function get() {
      return this._midiChlorian;
    },
    set: function set(value) {
      this._midiChlorian = value;
    }
  }]);

  return ForcePerson;
}(Person);

var Jedi =
/*#__PURE__*/
function (_ForcePerson) {
  _inherits(Jedi, _ForcePerson);

  function Jedi(firstName, lastName) {
    var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'male';
    var forceSide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bright';
    var midiChlorian = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Jedi);

    return _possibleConstructorReturn(this, _getPrototypeOf(Jedi).call(this, firstName, lastName, gender, forceSide, midiChlorian));
  }

  _createClass(Jedi, [{
    key: "toString",
    value: function toString() {
      return "Jedi Knight; " + _get(_getPrototypeOf(Jedi.prototype), "toString", this).call(this);
    }
  }]);

  return Jedi;
}(ForcePerson);

var Sith =
/*#__PURE__*/
function (_ForcePerson) {
  _inherits(Sith, _ForcePerson);

  function Sith(firstName, lastName) {
    var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'male';
    var forceSide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'dark';
    var midiChlorian = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Sith);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sith).call(this, firstName, lastName, gender, forceSide, midiChlorian));
  }

  _createClass(Sith, [{
    key: "toString",
    value: function toString() {
      return "Sith Lord; " + _get(_getPrototypeOf(Sith.prototype), "toString", this).call(this);
    }
  }]);

  return Sith;
}(ForcePerson);

/**
 * constructs Module class
 * @class Module
 * @classdesc Module ES6 Example
 * @public
 */

var Module =
/*#__PURE__*/
function () {
  function Module() {
    _classCallCheck(this, Module);

    this.init();
  }
  /**
   * initialize all
   * @memberOf Module
   * @method init
   * @instance
   */


  _createClass(Module, [{
    key: "init",
    value: function init() {
      // Place your module initialization code here
      var ObiWanKenobi = new Jedi('Obi Wan', 'Kenobi', 'male', 'bright', 13400);
      var LukeSkywalker = new Jedi('Luke', 'Skywalker', 'male', 'bright', 14500);
      var AnakinSkywalker = new Jedi('Anakin', 'Skywalker', 'male', 'bright', 27700);
      var DarthVader = new Sith('Darth', 'Vader', 'male', 'dark', 27700);
      console.log("A long time ago in a galaxy far far away......");
      console.log("\n      ".concat(ObiWanKenobi.toString(), "\n      was the master of\n      ").concat(AnakinSkywalker.toString(), "\n      and\n      ").concat(LukeSkywalker.toString(), "\n    "));
      console.log("before new hopes...");
      console.log("\n      ".concat(AnakinSkywalker.toString(), "\n      passed to the dark-side becoming\n      ").concat(DarthVader.toString(), "\n    "));
    }
  }]);

  return Module;
}();

if (typeof module !== 'undefined') {
  module.exports = Module;
}
//# sourceMappingURL=module.module.js.map
