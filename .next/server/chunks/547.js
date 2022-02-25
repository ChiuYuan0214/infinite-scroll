"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ reposActions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialReposState = {
    repos: [],
    currentPage: 0,
    isEnd: false
};
const ReposSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "repositories",
    initialState: initialReposState,
    reducers: {
        // concatenate new repos behind current repos.
        addRepos (state, action) {
            if (action.payload.length < 3) {
                state.isEnd = true;
            }
            state.repos = [
                ...state.repos,
                ...action.payload
            ];
            state.currentPage++;
        },
        // set the entire repos to new repos when query params was changed.
        // reset page number.
        setRepos (state, action) {
            state.repos = action.payload;
            state.currentPage = 1;
            state.isEnd = false;
        }
    }
});
const reposActions = ReposSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReposSlice.reducer);


/***/ })

};
;