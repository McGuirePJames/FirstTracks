"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HomeHOC_1 = require("../../HOCs/Home/HomeHOC");
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
react_dom_1.default.render(react_1.default.createElement(HomeHOC_1.HomeHOC, null), document.getElementById('mount'));
//# sourceMappingURL=HomeEntry.js.map