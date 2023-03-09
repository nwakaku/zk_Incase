/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* reexport safe */ _useIsMounted__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)\n/* harmony export */ });\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsMounted */ \"./hooks/useIsMounted.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BjcmVhdGUtd2ViMy9mcm9udGVuZC8uL2hvb2tzL2luZGV4LmpzPzQ4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSBcIi4vdXNlSXNNb3VudGVkXCI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VJc01vdW50ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ }),

/***/ "./hooks/useIsMounted.js":
/*!*******************************!*\
  !*** ./hooks/useIsMounted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsMounted = ()=>{\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>setMounted(true)\n    , []);\n    return mounted;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc01vdW50ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLFlBQVksR0FBRyxJQUFNO0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR0gsMkNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFbkRBLDRDQUFlLENBQUMsSUFBTUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFNUMsT0FBT0QsT0FBTyxDQUFDO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY3JlYXRlLXdlYjMvZnJvbnRlbmQvLi9ob29rcy91c2VJc01vdW50ZWQuanM/Y2E5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJc01vdW50ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xyXG5cclxuICByZXR1cm4gbW91bnRlZDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSXNNb3VudGVkIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useIsMounted.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/chains */ \"@wagmi/chains\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wagmi_chains__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rainbow-me/rainbowkit/wallets */ \"@rainbow-me/rainbowkit/wallets\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Imports\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.zkSyncTestnet\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: ()=>({\n                http: \"https://zksync2-testnet.zksync.dev\t\"\n            })\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)(), \n]);\n// const { connectors } = getDefaultWallets({\n//   appName: 'Incase',\n//   chains,\n// });\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.connectorsForWallets)([\n    {\n        groupName: \"Recommended\",\n        wallets: [\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.argentWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.injectedWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.rainbowWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.walletConnectWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.metaMaskWallet)({\n                chains\n            })\n        ]\n    }, \n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst App = ({ Component , pageProps  })=>{\n    const isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useIsMounted)();\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n            coolMode: true,\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Incase\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/incasezk/app/frontend/pages/_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/incasezk/app/frontend/pages/_app.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/incasezk/app/frontend/pages/_app.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/incasezk/app/frontend/pages/_app.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/incasezk/app/frontend/pages/_app.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDRTtBQUNGO0FBRS9CLFVBQVU7QUFDZ0U7QUFDaEI7QUFDRjtBQUNWO0FBRUg7QUFDb0M7QUFDakI7QUFPdEI7QUFHQTtBQUd4QyxNQUFNLEVBQUVrQixNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHZCxzREFBZSxDQUMxQztJQUFDRyx3REFBYTtDQUFDLEVBQ2Y7SUFDRUYsd0VBQWUsQ0FBQztRQUNkYyxHQUFHLEVBQUUsSUFBTSxDQUFDO2dCQUFFQyxJQUFJLEVBQUUscUNBQXFDO2FBQUUsQ0FBQztLQUM3RCxDQUFDO0lBQ0ZkLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRjtBQUVELDZDQUE2QztBQUM3Qyx1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLE1BQU07QUFFTixNQUFNZSxVQUFVLEdBQUdYLDRFQUFvQixDQUFDO0lBQ3RDO1FBQ0VZLFNBQVMsRUFBRSxhQUFhO1FBQ3hCQyxPQUFPLEVBQUU7WUFDUFosNEVBQVksQ0FBQztnQkFBRU0sTUFBTTthQUFFLENBQUM7WUFDeEJMLDhFQUFjLENBQUM7Z0JBQUVLLE1BQU07YUFBRSxDQUFDO1lBQzFCSiw2RUFBYSxDQUFDO2dCQUFFSSxNQUFNO2FBQUUsQ0FBQztZQUN6QkgsbUZBQW1CLENBQUM7Z0JBQUVHLE1BQU07YUFBRSxDQUFDO1lBQy9CRiw4RUFBYyxDQUFDO2dCQUFFRSxNQUFNO2FBQUUsQ0FBQztTQUMzQjtLQUNGO0NBQ0YsQ0FBQztBQUlGLE1BQU1PLFdBQVcsR0FBR3RCLG1EQUFZLENBQUM7SUFDL0J1QixXQUFXLEVBQUUsSUFBSTtJQUNqQkosVUFBVTtJQUNWSCxRQUFRO0NBQ1QsQ0FBQztBQUVGLE1BQU1RLEdBQUcsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDeEMsTUFBTUMsU0FBUyxHQUFHYixxREFBWSxFQUFFO0lBRWhDLElBQUksQ0FBQ2EsU0FBUyxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzVCLHFCQUNFLDhEQUFDMUIsOENBQVc7UUFBQzJCLE1BQU0sRUFBRU4sV0FBVztrQkFDOUIsNEVBQUNmLHNFQUFrQjtZQUFDc0IsUUFBUTtZQUFDZCxNQUFNLEVBQUVBLE1BQU07OzhCQUN6Qyw4REFBQ2pCLGtEQUFROzhCQUNQLDRFQUFDZ0MsT0FBSztrQ0FBQyxRQUFNOzs7OztpQ0FBUTs7Ozs7NkJBQ1o7OEJBQ1gsOERBQUNMLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7NkJBQUk7Ozs7OztxQkFDVDs7Ozs7aUJBQ1QsQ0FDZDtDQUNIO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BjcmVhdGUtd2ViMy9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHsgY2hhaW4sIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcsIGNvbmZpZ3VyZUNoYWlucyB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9qc29uUnBjJztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5pbXBvcnQgeyB6a1N5bmNUZXN0bmV0IH0gZnJvbSBcIkB3YWdtaS9jaGFpbnNcIjtcblxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgY29ubmVjdG9yc0ZvcldhbGxldHMgfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7XG4gIGFyZ2VudFdhbGxldCxcbiAgaW5qZWN0ZWRXYWxsZXQsXG4gIHJhaW5ib3dXYWxsZXQsXG4gIHdhbGxldENvbm5lY3RXYWxsZXQsXG4gIG1ldGFNYXNrV2FsbGV0LFxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC93YWxsZXRzXCI7XG5cblxuaW1wb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbemtTeW5jVGVzdG5ldF0sXG4gIFtcbiAgICBqc29uUnBjUHJvdmlkZXIoe1xuICAgICAgcnBjOiAoKSA9PiAoeyBodHRwOiBcImh0dHBzOi8vemtzeW5jMi10ZXN0bmV0Lnprc3luYy5kZXZcdFwiIH0pLFxuICAgIH0pLFxuICAgIHB1YmxpY1Byb3ZpZGVyKCksXG4gIF1cbik7XG5cbi8vIGNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuLy8gICBhcHBOYW1lOiAnSW5jYXNlJyxcbi8vICAgY2hhaW5zLFxuLy8gfSk7XG5cbmNvbnN0IGNvbm5lY3RvcnMgPSBjb25uZWN0b3JzRm9yV2FsbGV0cyhbXG4gIHtcbiAgICBncm91cE5hbWU6IFwiUmVjb21tZW5kZWRcIixcbiAgICB3YWxsZXRzOiBbIFxuICAgICAgYXJnZW50V2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgICAgaW5qZWN0ZWRXYWxsZXQoeyBjaGFpbnMgfSksXG4gICAgICByYWluYm93V2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgICAgd2FsbGV0Q29ubmVjdFdhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgIG1ldGFNYXNrV2FsbGV0KHsgY2hhaW5zIH0pXG4gICAgXSxcbiAgfSxcbl0pO1xuXG5cblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTtcblxuICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjb29sTW9kZSBjaGFpbnM9e2NoYWluc30+XG4gICAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgICA8dGl0bGU+SW5jYXNlPC90aXRsZT5cbiAgICAgICAgPC9OZXh0SGVhZD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5leHRIZWFkIiwiY2hhaW4iLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImNvbmZpZ3VyZUNoYWlucyIsImpzb25ScGNQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiemtTeW5jVGVzdG5ldCIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiY29ubmVjdG9yc0ZvcldhbGxldHMiLCJhcmdlbnRXYWxsZXQiLCJpbmplY3RlZFdhbGxldCIsInJhaW5ib3dXYWxsZXQiLCJ3YWxsZXRDb25uZWN0V2FsbGV0IiwibWV0YU1hc2tXYWxsZXQiLCJ1c2VJc01vdW50ZWQiLCJjaGFpbnMiLCJwcm92aWRlciIsInJwYyIsImh0dHAiLCJjb25uZWN0b3JzIiwiZ3JvdXBOYW1lIiwid2FsbGV0cyIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc01vdW50ZWQiLCJjbGllbnQiLCJjb29sTW9kZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@wagmi/chains":
/*!********************************!*\
  !*** external "@wagmi/chains" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@wagmi/chains");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@rainbow-me/rainbowkit/wallets":
/*!*************************************************!*\
  !*** external "@rainbow-me/rainbowkit/wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit/wallets");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/jsonRpc");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();