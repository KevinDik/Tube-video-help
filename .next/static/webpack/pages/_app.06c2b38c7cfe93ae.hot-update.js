"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/RegisterVideo/index.js":
/*!***********************************************!*\
  !*** ./src/components/RegisterVideo/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/RegisterVideo/style.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction useForm(propsForm) {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(propsForm.initialValues);\n    return {\n        handleChange: (evento)=>{\n            const value = evento.target.value;\n            setValues({\n                ...values,\n                titulo: value\n            });\n        }\n    };\n}\n_s(useForm, \"7k9HrM0skyNJ8qA7h0M2b+Sb8Kk=\");\nfunction RegisterVideo() {\n    _s1();\n    const [formVisivel, setFormVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"Frost punk\",\n            url: \"https://youtube..\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evento)=>{\n                    evento.preventDefault();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"x\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"titulo do video\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, this) : false\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Aprendizado\\\\GitHub\\\\Tube-video\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s1(RegisterVideo, \"7jWPh3u0j11H5n6m8icnZnvTNPE=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNvQjtBQUU5QyxTQUFTRSxRQUFRQyxTQUFTLEVBQUU7O0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCxxREFBYyxDQUFDRyxVQUFVSSxhQUFhO0lBRWxFLE9BQU87UUFDSEMsY0FBYyxDQUFDQyxTQUFXO1lBQ3RCLE1BQU1DLFFBQVFELE9BQU9FLE1BQU0sQ0FBQ0QsS0FBSztZQUNqQ0wsVUFBVTtnQkFDTixHQUFHRCxNQUFNO2dCQUNUUSxRQUFRRjtZQUNaO1FBQ0o7SUFDSjtBQUNKO0dBWlNSO0FBY00sU0FBU1csZ0JBQWdCOztJQUNwQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YscURBQWMsQ0FBQyxLQUFLO0lBQzFELE1BQU1nQixlQUFlZCxRQUFRO1FBQ3pCSyxlQUFlO1lBQUNLLFFBQVE7WUFBY0ssS0FBSztRQUFtQjtJQUNsRTtJQUVBLHFCQUNJLDhEQUFDaEIsdURBQW1CQTs7MEJBQ2hCLDhEQUFDaUI7Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVMsSUFBTUwsZUFBZSxJQUFJOzBCQUFHOzs7Ozs7WUFHbEVELDRCQUNHLDhEQUFDTztnQkFBS0MsVUFBVSxDQUFDYixTQUFXO29CQUN4QkEsT0FBT2MsY0FBYztnQkFDekI7MEJBQ0ksNEVBQUNDOztzQ0FDRyw4REFBQ047NEJBQU9DLFdBQVU7NEJBQWNDLFNBQVMsSUFBTUwsZUFBZSxLQUFLO3NDQUFHOzs7Ozs7c0NBR3RFLDhEQUFDVTs0QkFDR0MsYUFBWTs0QkFDWmhCLE9BQU9NLGFBQWFaLE1BQU0sQ0FBQ1EsTUFBTTs0QkFDakNlLFVBQVVYLGFBQWFSLFlBQVk7Ozs7OztzQ0FDdkMsOERBQUNpQjs0QkFDR0MsYUFBWTs0QkFDWmhCLE9BQU9NLGFBQWFaLE1BQU0sQ0FBQ2EsR0FBRzs0QkFDOUJVLFVBQVVYLGFBQWFSLFlBQVk7Ozs7OztzQ0FDdkMsOERBQUNVOzRCQUFPVSxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7O3VCQU01QixLQUFLOzs7Ozs7O0FBR3ZCLENBQUM7SUFwQ3VCZjs7UUFFQ1g7OztLQUZEVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRSZWdpc3RlclZpZGVvIH0gZnJvbSBcIi4vc3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm0ocHJvcHNGb3JtKSB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHNGb3JtLmluaXRpYWxWYWx1ZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlOiAoZXZlbnRvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnRvLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHRpdHVsbzogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyVmlkZW8oKSB7XHJcbiAgICBjb25zdCBbZm9ybVZpc2l2ZWwsIHNldEZvcm1WaXNpdmVsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGZvcm1DYWRhc3RybyA9IHVzZUZvcm0oe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHt0aXR1bG86IFwiRnJvc3QgcHVua1wiLCB1cmw6IFwiaHR0cHM6Ly95b3V0dWJlLi5cIn1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2Zvcm1WaXNpdmVsID8gKFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhldmVudG8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtVmlzaXZlbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdHVsbyBkbyB2aWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybUNhZGFzdHJvLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVUkxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtQ2FkYXN0cm8udmFsdWVzLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhZGFzdHJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZX1cclxuICAgICAgICA8L1N0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwidXNlRm9ybSIsInByb3BzRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiaW5pdGlhbFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50byIsInZhbHVlIiwidGFyZ2V0IiwidGl0dWxvIiwiUmVnaXN0ZXJWaWRlbyIsImZvcm1WaXNpdmVsIiwic2V0Rm9ybVZpc2l2ZWwiLCJmb3JtQ2FkYXN0cm8iLCJ1cmwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});