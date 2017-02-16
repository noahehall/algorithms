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
        _this.rowStats.push([0]);
        var isnan = 0;
        row.forEach(function (num, coli) {
          if (!isNaN(num)) _this.rowStats[rowi][0] += Number(num);else if (skipIsNan) ++isnan;else _this.rowStats[rowi][0] += 0;

          if (coli + 1 === row.length) _this.rowStats[rowi].push(_this.rowStats[rowi] / (coli + 1 - isnan));
        });
      });

      return _this.rowStats;
    };

    _this.calculateColumnStats = function () {
      var skipIsNan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.columnStats = [];
      var i = 0,
          k = _this.length;
      while (k > i++) {
        _this.forEach(function (row, rowi) {
          _this.columnStats.push([0]);
          var isnan = 0;
          row.forEach(function (num, coli) {
            if (!isNaN(num)) _this.columnStats[rowi][i] += Number(num);else if (skipIsNan) ++isnan;else _this.columnStats[rowi][i] += 0;

            if (coli + 1 === row.length) _this.columnStats[rowi].push(_this.columnStats[rowi] / (coli + 1 - isnan));
          });
        });
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

  /* in the form [[total, average], [..]] for each row */

  /* in the form [[total, average], [..]] for each column */


  /**
   * calculates stats for all columns containing numbers
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

var ds = {
  arrays: _extends({}, arrays)
};

var index = _extends({}, algo, ds);

module.exports = index;
