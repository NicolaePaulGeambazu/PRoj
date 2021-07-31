"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box18 = exports.Box3 = exports.Box2 = exports.Box1 = exports.Acc = exports.Small = exports.Wrapper = exports.Search = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: red;\n  grid-column: 5/7;\n  grid-row: 3/5;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 3/5;\n  grid-row: 1/3;\n  border: 1px solid black;\n  background-color: red;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid black;\n  background-color: green;\n  width: 160px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid black;\n  background-color: green;\n  width: 160px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: end;\n  justify-content: flex-end;\n  margin-top: 50px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid black;\n  width: 160px;\n  height: 160px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid black;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 4fr;\n  margin-left: 160px;\n  margin-right: 128px;\n  margin-top: 110px;\n  margin-bottom: 37px;\n  width: 1416px;\n  padding: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 160px;\nheight: 40px;\nmargin-right: 128px;\nborder: solid 1px #5B6770;\nborder-radius:10px;\nmargin-left:76px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 36px;\n  color: #00a9e0;\n  margin-left: 160px;\n  margin-top: 47px;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].div(_templateObject());

exports.Title = Title;

var Search = _styledComponents["default"].input(_templateObject2());

exports.Search = Search;

var Wrapper = _styledComponents["default"].div(_templateObject3());

exports.Wrapper = Wrapper;

var Small = _styledComponents["default"].img(_templateObject4());

exports.Small = Small;

var Acc = _styledComponents["default"].span(_templateObject5());

exports.Acc = Acc;

var Box1 = _styledComponents["default"].div(_templateObject6());

exports.Box1 = Box1;

var Box2 = _styledComponents["default"].div(_templateObject7());

exports.Box2 = Box2;

var Box3 = _styledComponents["default"].div(_templateObject8());

exports.Box3 = Box3;

var Box18 = _styledComponents["default"].div(_templateObject9());

exports.Box18 = Box18;