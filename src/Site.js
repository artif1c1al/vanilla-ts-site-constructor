"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Site = void 0;
var utils_1 = require("./utils");
var message = '<h1>Hello World</h1>';
var Site = /** @class */ (function () {
    function Site(selector) {
        var _this = this;
        this.render = function () {
            _this.$el.insertAdjacentElement('afterbegin', utils_1.stringToHTML(message));
        };
        this.selector = selector;
        console.log(selector);
        this.$el = document.querySelector(selector);
    }
    return Site;
}());
exports.Site = Site;
