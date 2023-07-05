"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var App = function App() {
  var quill = React.useRef({});
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    delta = _React$useState2[0],
    setDelta = _React$useState2[1];
  var initContent = '';
  var getQuill = function getQuill(quillIns) {
    quill.current = quillIns;
  };
  var quillChange = function quillChange(delta, old, source) {
    console.log('quill-change:', delta, old, source);
    setDelta(JSON.stringify(quill.current.getContents()));
  };
  console.log(window, window.quillReactCommercial);
  var RichTextEditor = window.quillReactCommercial;
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(RichTextEditor, {
    readOnly: false,
    modules: {
      table: {},
      codeHighlight: true
      // imageHandler: {
      //   imgUploadApi: (formData) =>
      //     // console.log(apiURL('uploadImg'))
      //     request(apiURL('uploadImg'), ajaxFormPostOptions(formData)).then(
      //       (response) => response.url,
      //     ),
      //   uploadFailCB: () => console.error('图片上传失败'),
      // },
    },

    getQuill: getQuill,
    content:
    // 初始化笔记内容，而不能直接使用activeNote.content，因为当更新或保存会重新渲染导致内容重置到保存时刻，光标变到开头
    initContent,
    onChange: quillChange,
    onFocus: function onFocus(arg) {},
    style: {
      background: '#eee',
      height: 600
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200
    }
  }, delta));
};
var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
root.render( /*#__PURE__*/React.createElement(App, null));
//# sourceMappingURL=app.js.map