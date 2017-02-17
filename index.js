'use strict';

function add(sum, max, total, carry) {
  if (total > 9) {
    sum[max] = total - 10;
    carry = 1;
  } else {
    sum[max] = total;
    carry = 0;
  }
  max--;

  return [sum, max, total, carry];
}

/**
 * adds two numbers and returns the result
 * addition algorithm
 * @see Algorithms_in_a_Nutshell_Second_Edition
 */
function plus(one, // 10 === [1,0]
two) {
  var sum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _map = [one, two].map(function (x) {
    return String(parseInt(x, 10)).split('').map(function (y) {
      return Number(y);
    });
  }),
      n1 = _map[0],
      n2 = _map[1];

  var position1 = n1.length,
      position2 = n2.length,
      max = Math.max(position1, position2) - 1,
      carry = 0;

  while (--position1 >= 0 && --position2 >= 0) {
    var total = n1[position1] + n2[position2] + carry;

    var _add = add(sum, max, total, carry);

    sum = _add[0];
    max = _add[1];
    total = _add[2];
    carry = _add[3];
  }

  if (position1 >= 0) while (position1 >= 0) {
    var _total = n1[position1] + carry;

    var _add2 = add(sum, max, _total, carry);

    sum = _add2[0];
    max = _add2[1];
    _total = _add2[2];
    carry = _add2[3];

    --position1;
  } else if (position2 >= 0) while (position2 >= 0) {
    var _total2 = n2[position2] + carry;

    var _add3 = add(sum, max, _total2, carry);

    sum = _add3[0];
    max = _add3[1];
    _total2 = _add3[2];
    carry = _add3[3];

    --position2;
  }

  if (carry > 0) sum[max] = carry;
  return Number(sum.join(''));
}

var linear = {
  plus: plus
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var algo = {
  linear: _extends({}, linear)
};

/**
 * creates a two dimensional array and returns
 * @see datastructures and algorithms in javascript, page 28
 */
var TwoD = function (_Array) {
  inherits(TwoD, _Array);

  function TwoD() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var _ret;

    var init = arguments[2];
    classCallCheck(this, TwoD);

    var _this = possibleConstructorReturn(this, _Array.call(this));

    _this.rowStats = [];
    _this.columnStats = [];

    _this.calculateRowStats = function () {
      var skipIsNan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.rowStats = [];
      _this.forEach(function (row, rowi) {
        _this.rowStats.push([0, 0]);
        row.forEach(function (num, coli) {
          if (!isNaN(num)) {
            // sum
            _this.rowStats[rowi][1] += Number(num);
            // N
            _this.rowStats[rowi][0]++;
          }
          // N
          else if (skipIsNan) _this.rowStats[rowi][0]--;

          // average
          if (coli + 1 === row.length) _this.rowStats[rowi].push(_this.rowStats[rowi][1] / _this.rowStats[rowi][0]);
        });
      });

      return _this.rowStats;
    };

    _this.calculateColumnStats = function () {
      var skipIsNan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.columnStats = [];
      var i = 0,
          k = _this.length;
      while (k > i) {
        _this.columnStats.push([0, 0]);
        _this.forEach(function (row, rowi) {
          row.forEach(function (num, coli) {
            if (coli === i) {
              if (!isNaN(num)) {
                // sum
                _this.columnStats[i][1] += Number(num);
                // N
                _this.columnStats[i][0]++;
              }
              // N
              else if (skipIsNan) _this.columnStats[i][1]--;

              // average
              if (rowi + 1 === row.length) {
                _this.columnStats[i].push(_this.columnStats[i][1] / _this.columnStats[i][0]);
              }
            }
          });
        });
        i++;
      }
      return _this.columnStats;
    };

    var arr = [];
    if (Number(rows) > 0) while (rows-- > 0) {
      var reset = cols;
      var columns = [];
      if (Number(cols) > 0) while (cols-- > 0) {
        columns[columns.length] = init;
      }
      arr[arr.length] = columns;
      cols = reset;
    }

    _this.prototype = Object.create(Array.prototype);
    _this.push.apply(_this, arr);
    return _ret = _this, possibleConstructorReturn(_this, _ret);
  }

  /* in the form [[N, sum, average], [..]] for each row */

  /* in the form [[N, sum, average], [..]] for each column */


  /**
   * calculates stats for all rows containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan [boolean=true] if true, will not include isNaN in calculations
   */


  /**
   * calculates stats for all columns containing numbers
   * @see javascript datastructures and algorithms page 29
   * @param skipIsNan [boolean=true] if true, will not include isNaN in calculations
   */


  return TwoD;
}(Array);

var arrays = {
  TwoD: TwoD
};

// validation
var validateElement = function (element) {
  return element !== undefined && element !== null;
};

/**
 * creates a list
 * @see datastructures and algorithms in javascript, page 36
 */

var List = function List() {
  var _this = this;

  classCallCheck(this, List);
  this.length = 0;
  this.position = 0;
  this.dataStore = [];

  this.insert = function (element, after) {
    if (validateElement(element) && validateElement(after)) {
      var index = _this.getIndex(after);
      if (index > -1) {
        _this.dataStore.splice(index + 1, 0, element);
        ++_this.length;
        return element;
      }
    }

    return false;
  };

  this.append = function (element) {
    if (validateElement(element)) {
      _this.dataStore[_this.length++] = element;
      return _this;
    }

    return false;
  };

  this.get = function (element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

    var that = -1;
    if (validateElement(element)) {
      _this.dataStore.some(function (el, i) {
        if (el === element) that = type === 'index' ? i : el;
      });
    }

    return that;
  };

  this.getElement = function (element) {
    return _this.get(element, true);
  };

  this.getIndex = function (element) {
    return _this.get(element);
  };

  this.getCurrentElement = function () {
    return _this.dataStore[_this.position];
  };

  this.getList = function () {
    return _this.dataStore;
  };

  this.toString = function () {
    return _this.dataStore.toString();
  };

  this.front = function () {
    _this.position = 0;
    return _this;
  };

  this.end = function () {
    _this.position = _this.length - 1;
    return _this;
  };

  this.previous = function () {
    if (_this.position > -1) {
      --_this.position;
      return _this;
    }

    return false;
  };

  this.next = function () {
    if (_this.position < _this.length) {
      ++_this.position;
      return _this;
    }
    return false;
  };

  this.moveTo = function (index) {
    if (Number(index) > -1 && Number(index) < _this.length - 1) {
      _this.position = Number(index);
      return _this;
    }
    return false;
  };

  this.clear = function () {
    _this.dataStore = [];
    _this.length = _this.position = 0;

    return _this;
  };

  this.remove = function (element) {
    var index = _this.getIndex(element);
    if (index > -1) {
      _this.dataStore.splice(index, 1);
      --_this.length;
      return _this;
    }

    return false;
  };

  this.forEach = function (process) {
    for (_this.front(); _this.position < _this.length; _this.next()) {
      process(_this.getCurrentElement(), _this.position, _this.dataStore);
    }

    return _this;
  };

  this.backEach = function (process) {
    for (_this.end(); _this.position > -1; _this.previous()) {
      process(_this.getCurrentElement(), _this.position, _this.dataStore);
    }

    return _this;
  };

  return this;
};

var Stack = function (_List) {
  inherits(Stack, _List);

  function Stack() {
    classCallCheck(this, Stack);
    return possibleConstructorReturn(this, _List.call(this));
  }

  return Stack;
}(List);

var lists = {
  List: List,
  Stack: Stack
};

var ds = {
  arrays: _extends({}, arrays),
  lists: _extends({}, lists)
};

var index = _extends({}, algo, ds);

module.exports = index;
