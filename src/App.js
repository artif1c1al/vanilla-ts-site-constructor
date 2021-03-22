"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var Site_1 = require("./Site");
var App = /** @class */ (function () {
    function App(model) {
        if (model === void 0) { model = null; }
        this.model = model;
        this.site = new Site_1.Site('#site');
    }
    return App;
}());
exports.App = App;
