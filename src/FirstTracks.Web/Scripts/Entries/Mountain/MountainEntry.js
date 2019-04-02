"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var MountainHOC_1 = require("../../HOCs/Mountain/MountainHOC");
react_dom_1.default.render(react_1.default.createElement(MountainHOC_1.MountainHOC, null), document.getElementById('mount'));
//# sourceMappingURL=MountainEntry.js.map