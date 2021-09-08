/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
window.__dataverseNftCrawler = {
    opensea: function () {
        var nftInfo = {
            contract: '',
            tokenId: '',
            platformUrl: location.href
        };
        nftInfo.contract = "0xd6a30176bb3bc72385d517ea9d44970a06214fdf";
        nftInfo.tokenId = "301078382356528963674261205096628993547";
        return nftInfo;
    },
    superrare: function () {
        return "superrare";
    }
};
var listen = (function () {
    window.addEventListener("message", function (e) {
        console.log("message", e);
        if (e.data.msgType && e.data.msgType === "fetchNftResponse") {
            console.log("recived message", e);
        }
    }, false);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LWNyYXdsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1jcmF3bGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbndpbmRvdy5fX2RhdGF2ZXJzZU5mdENyYXdsZXIgPSB7XHJcbiAgICBvcGVuc2VhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5mdEluZm8gPSB7XHJcbiAgICAgICAgICAgIGNvbnRyYWN0OiAnJyxcclxuICAgICAgICAgICAgdG9rZW5JZDogJycsXHJcbiAgICAgICAgICAgIHBsYXRmb3JtVXJsOiBsb2NhdGlvbi5ocmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZnRJbmZvLmNvbnRyYWN0ID0gXCIweGQ2YTMwMTc2YmIzYmM3MjM4NWQ1MTdlYTlkNDQ5NzBhMDYyMTRmZGZcIjtcclxuICAgICAgICBuZnRJbmZvLnRva2VuSWQgPSBcIjMwMTA3ODM4MjM1NjUyODk2MzY3NDI2MTIwNTA5NjYyODk5MzU0N1wiO1xyXG4gICAgICAgIHJldHVybiBuZnRJbmZvO1xyXG4gICAgfSxcclxuICAgIHN1cGVycmFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcInN1cGVycmFyZVwiO1xyXG4gICAgfVxyXG59O1xyXG52YXIgbGlzdGVuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBlKTtcclxuICAgICAgICBpZiAoZS5kYXRhLm1zZ1R5cGUgJiYgZS5kYXRhLm1zZ1R5cGUgPT09IFwiZmV0Y2hOZnRSZXNwb25zZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjaXZlZCBtZXNzYWdlXCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9