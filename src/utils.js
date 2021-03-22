"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToHTML = void 0;
var stringToHTML = function (str) {
    var parser = new DOMParser();
    var tag = parser.parseFromString(str, 'text/html');
    return tag.body;
};
exports.stringToHTML = stringToHTML;
