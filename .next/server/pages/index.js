(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 819:
/***/ ((module) => {

// Exports
module.exports = {
	"repo": "Card_repo__gU1vq",
	"fade-in": "Card_fade-in__My_r4",
	"links": "Card_links__91Svg"
};


/***/ }),

/***/ 115:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "CardList_list__aogNS"
};


/***/ }),

/***/ 888:
/***/ ((module) => {

// Exports
module.exports = {
	"filter": "Filter_filter__iCoEa"
};


/***/ }),

/***/ 234:
/***/ ((module) => {

// Exports
module.exports = {
	"backdrop": "LoadingAnimation_backdrop__OcCYF",
	"loading": "LoadingAnimation_loading__FUYKt",
	"scaleUp": "LoadingAnimation_scaleUp__HDp9E"
};


/***/ }),

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"defaultText": "Home_defaultText__uMyT9",
	"error": "Home_error__m2kA6",
	"container": "Home_container__bCOhY"
};


/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./store/repos.tsx
var store_repos = __webpack_require__(547);
// EXTERNAL MODULE: ./components/Filter/Filter.module.css
var Filter_module = __webpack_require__(888);
var Filter_module_default = /*#__PURE__*/__webpack_require__.n(Filter_module);
;// CONCATENATED MODULE: ./components/Filter/Filter.tsx



const Filter = ({ setType , setSort , setDirection , type: type1 , sort , direction  })=>{
    // function triggered by change event on select element.
    const selectChangeHandler = (type, event)=>{
        const val = event.target.value;
        // set the input value as respective state based on specified type.
        // query params keys: type, sort, direction.
        switch(type){
            case "TYPE":
                setType(val);
                break;
            case "SORT":
                setSort(val);
                break;
            case "DIRECTION":
                setDirection(val);
                break;
            default:
                return;
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (Filter_module_default()).filter,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                value: type1,
                name: "type",
                onChange: selectChangeHandler.bind(null, "TYPE"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "all",
                        children: "All"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "public",
                        children: "Public"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "private",
                        children: "Private"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "forks",
                        children: "Forks"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "sources",
                        children: "Sources"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "member",
                        children: "Member"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "internal",
                        children: "Internal"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                value: sort,
                name: "sort",
                onChange: selectChangeHandler.bind(null, "SORT"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "created",
                        children: "Created"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "updated",
                        children: "Updated"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "pushed",
                        children: "Pushed"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "full_name",
                        children: "Full Name"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                value: direction,
                name: "direction",
                onChange: selectChangeHandler.bind(null, "DIRECTION"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "desc",
                        children: "Desc"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "asc",
                        children: "Asc"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Filter_Filter = (Filter);

// EXTERNAL MODULE: ./components/CardList/Card/Card.module.css
var Card_module = __webpack_require__(819);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/CardList/Card/Card.tsx



const Card = ({ repo  })=>{
    const { url , id , name , date , downloadsUrl  } = repo;
    // to add some readability.
    const displayedDate = date.replace("T", " ").replace("Z", "");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (Card_module_default()).repo,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "ID: ",
                    id
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "NAME: ",
                    name
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "DATE: ",
                    displayedDate
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Card_module_default()).links,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        target: "_blank",
                        href: url,
                        children: "REPO_URL"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        target: "_blank",
                        href: downloadsUrl,
                        children: "DOWNLOADS_URL"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Card_Card = (Card);

// EXTERNAL MODULE: ./components/CardList/CardList.module.css
var CardList_module = __webpack_require__(115);
var CardList_module_default = /*#__PURE__*/__webpack_require__.n(CardList_module);
;// CONCATENATED MODULE: ./components/CardList/CardList.tsx




const CardList = ({ list  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (CardList_module_default()).list,
        children: list.map((repo)=>/*#__PURE__*/ jsx_runtime_.jsx(Card_Card, {
                repo: repo
            }, repo.name)
        )
    }));
};
/* harmony default export */ const CardList_CardList = (CardList);

// EXTERNAL MODULE: ./components/UI/LoadingAnimation/LoadingAnimation.module.css
var LoadingAnimation_module = __webpack_require__(234);
var LoadingAnimation_module_default = /*#__PURE__*/__webpack_require__.n(LoadingAnimation_module);
;// CONCATENATED MODULE: ./components/UI/LoadingAnimation/LoadingAnimation.tsx



const LoadingSpinner = ()=>{
    const BackDrop = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (LoadingAnimation_module_default()).backdrop
        }));
    };
    const LoadingSign = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (LoadingAnimation_module_default()).loading,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
            ]
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BackDrop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LoadingSign, {})
        ]
    }));
};
/* harmony default export */ const LoadingAnimation = (LoadingSpinner);

;// CONCATENATED MODULE: ./models/repo.ts
class Repo {
    constructor(url, id, name, date, downloadsUrl){
        this.url = url;
        this.id = id;
        this.name = name;
        this.date = date;
        this.downloadsUrl = downloadsUrl;
    }
}
/* harmony default export */ const repo = (Repo);

;// CONCATENATED MODULE: ./libs/extract.ts

const extract = (list)=>{
    if (list.length === 0) {
        return [];
    }
    return list.map((data)=>{
        return new repo(data["clone_url"], data.id, data.name, data["created_at"], data["downloads_url"]);
    });
};

;// CONCATENATED MODULE: ./hooks/fetchRepos.tsx


const useFetchRepos = (repoName)=>{
    // HTTP request status
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(null);
    const sendRequest = async (newPage, type, sort, direction)=>{
        setIsLoading(true);
        setError(null);
        // newPage => the page number to extract.
        // type, sort, direction => query params to filter data.
        const url = `https://api.github.com/orgs/${repoName}/repos?per_page=3&page=${newPage}&type=${type}&sort=${sort}&direction=${direction}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setError("Failed to connect to Github.");
            }
            const data = await response.json();
            const newRepos = extract(data);
            setIsLoading(false);
            return newRepos;
        } catch (err) {
            setError("Something went wrong.");
            setIsLoading(false);
        }
    };
    return {
        isLoading,
        error,
        sendRequest
    };
};
/* harmony default export */ const fetchRepos = (useFetchRepos);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.tsx





// components.



// helper function, for extracting data of response from github api.

// custom hook, for handling http request.


// change the orgs name here.
const REPO_NAME = "ChiuYuan-First-Organization";
// to prevent filter checking on first rendering.
let isInitial = true;
const Home = (props)=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const currentPage = (0,external_react_redux_.useSelector)((state)=>state.repos.currentPage
    );
    const repos = (0,external_react_redux_.useSelector)((state)=>state.repos.repos
    );
    const { isLoading , error , sendRequest  } = fetchRepos(REPO_NAME);
    // to check if the page has been scroll to end.
    const { 0: isEnd , 1: setIsEnd  } = (0,external_react_.useState)(false);
    // ref for scroll event.
    const containerRef = (0,external_react_.useRef)(null);
    const innerRef = (0,external_react_.useRef)(null);
    // to get user input as query values.
    const { 0: type , 1: setType  } = (0,external_react_.useState)("all");
    const { 0: sort , 1: setSort  } = (0,external_react_.useState)("created");
    const { 0: direction , 1: setDirection  } = (0,external_react_.useState)("desc");
    // dispatch props to redux when building process, default value.
    (0,external_react_.useEffect)(()=>{
        dispatch(store_repos/* reposActions.addRepos */.c.addRepos(props.repos));
    }, []);
    // reset 'repos' in store when filter options have changed.
    (0,external_react_.useEffect)(()=>{
        // avoid re-rendering at first round.
        if (isInitial) {
            isInitial = false;
            return;
        }
        // fix the page number to 1.
        sendRequest(1, type, sort, direction).then((data)=>{
            let newRepos = [];
            if (data && data.length > 0) {
                newRepos = JSON.parse(JSON.stringify(data));
            }
            // set the entire repos to newly received repos.
            dispatch(store_repos/* reposActions.setRepos */.c.setRepos(newRepos));
            setIsEnd(false);
        });
    }, [
        type,
        sort,
        direction
    ]);
    // function triggered by scroll event listener.
    const scrollHandler = ()=>{
        // measure the distance from viewport's left-top corner to the bottom of body.
        const distanceToBottom = innerRef.current.getBoundingClientRect().bottom;
        // to check if the distance is smaller than viewHeight + 100.
        const isClosingBottom = distanceToBottom < containerRef.current.offsetHeight + 100;
        // only fetch new data when not loading, not end of data and closing to bottom of the page.
        if (!isLoading && !isEnd && isClosingBottom) {
            // assign the page number as current page number + 1.
            const newPage = currentPage + 1;
            sendRequest(newPage, type, sort, direction).then((data)=>{
                if (data && data.length > 0) {
                    const newRepos = JSON.parse(JSON.stringify(data));
                    dispatch(store_repos/* reposActions.addRepos */.c.addRepos(newRepos));
                } else {
                    // this block triggered when length of data is not greater than 0.
                    // equal to 'no more valid data'.
                    // set isEnd to true to stop triggering this function when scroll.
                    setIsEnd(true);
                }
            });
        }
    };
    // default page content.
    let content = /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: (Home_module_default()).defaultText,
        children: "No Repos."
    });
    // when error occured.
    if (error) {
        content = /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: (Home_module_default()).error,
            children: error
        });
    }
    // when repos is not empty and no error exist.
    if (repos.length > 0) {
        content = /*#__PURE__*/ jsx_runtime_.jsx(CardList_CardList, {
            list: repos
        });
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "ChiuYuan's repos"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Adam Chiu's repositories."
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(LoadingAnimation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: containerRef,
                onScroll: scrollHandler,
                className: (Home_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "inner",
                    ref: innerRef,
                    className: (Home_module_default()).inner,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Filter_Filter, {
                            setType: setType,
                            setSort: setSort,
                            setDirection: setDirection,
                            type: type,
                            sort: sort,
                            direction: direction
                        }),
                        content
                    ]
                })
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const response = await fetch(`https://api.github.com/orgs/${REPO_NAME}/repos?per_page=3&page=1&type=all&sort=created&direction=desc`);
    if (!response.ok) {
        console.log("failed to fetch static props");
    }
    let dataList = await response.json();
    dataList = dataList.length > 0 ? dataList : [];
    const repos = extract(dataList);
    return {
        props: {
            repos: JSON.parse(JSON.stringify(repos))
        },
        revalidate: 1
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ reposActions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialReposState = {
    repos: [],
    currentPage: 0
};
const ReposSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "repositories",
    initialState: initialReposState,
    reducers: {
        // concatenate new repos behind current repos.
        addRepos (state, action) {
            state.repos = [
                ...state.repos,
                ...action.payload
            ];
            state.currentPage++;
        },
        // set the entire repos to new repos.
        setRepos (state, action) {
            state.repos = action.payload;
            state.currentPage = 1;
        }
    }
});
const reposActions = ReposSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReposSlice.reducer);


/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(437));
module.exports = __webpack_exports__;

})();