"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box18 = exports.Box3 = exports.Box2 = exports.Box1 = exports.Acc = exports.Small = exports.Wrapper = exports.Search = exports.BarSearch = exports.SearchPoint = exports.Icon = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  height: 452px;\n  width: 452px;\n  background-color: red;\n  grid-column: 5/7;\n  grid-row: 3/5;\n  background-color: red;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  height: 452px;\n  width: 452px;\n  grid-column: 3/5;\n  grid-row: 1/3;\n  background-color: red;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  background-color: green;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: green;\n  width: 160px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: end;\n  justify-content: flex-end;\n  margin-top: 50px;\n  float: right;\n  margin-left: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 216px;\n  height: 216px;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 4fr;\n  margin-left: 160px;\n  margin-right: 128px;\n  margin-top: 110px;\n  margin-bottom: 37px;\n  width: 1675px;\n  padding: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n  margin-top: 13px;\n  margin-left: 3px;\n  margin-right: 3px;\n  width: 70%;\n  float: left;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: -10px;\n  width: 160px;\n  height: 40px;\n  margin-right: 128px;\n  border-radius: 50px;\n  border: solid 1px #5b6770;\n  margin-left: 76px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: #5b6770;\n  float: right;\n  background-image: url(\"../images/ico_search.png\");\n  height: 30px;\n  padding: 5px;\n  border-radius: 50px;\n  margin-top: -30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmargin:10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 36px;\n  color: #00a9e0;\n  margin-left: 160px;\n  margin-top: 47px;\n  margin-bottom: 45px;\n  float: left;\n  width: 1675px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].div(_templateObject());

exports.Title = Title;

var Icon = _styledComponents["default"].img(_templateObject2());

exports.Icon = Icon;

var SearchPoint = _styledComponents["default"].img(_templateObject3());

exports.SearchPoint = SearchPoint;

var BarSearch = _styledComponents["default"].div(_templateObject4());

exports.BarSearch = BarSearch;

var Search = _styledComponents["default"].input(_templateObject5());

exports.Search = Search;

var Wrapper = _styledComponents["default"].div(_templateObject6());

exports.Wrapper = Wrapper;

var Small = _styledComponents["default"].img(_templateObject7());

exports.Small = Small;

var Acc = _styledComponents["default"].span(_templateObject8());

exports.Acc = Acc;

var Box1 = _styledComponents["default"].div(_templateObject9());

exports.Box1 = Box1;

var Box2 = _styledComponents["default"].div(_templateObject10());

exports.Box2 = Box2;

var Box3 = _styledComponents["default"].img(_templateObject11());

exports.Box3 = Box3;

var Box18 = _styledComponents["default"].img(_templateObject12());

exports.Box18 = Box18;