"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../../Stylesheets/global.scss");
require("../Mountain/_mountain.scss");
var MountainHOC = /** @class */ (function (_super) {
    __extends(MountainHOC, _super);
    function MountainHOC(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    MountainHOC.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "mountain-hoc" }));
    };
    return MountainHOC;
}(react_1.default.Component));
exports.MountainHOC = MountainHOC;
//# sourceMappingURL=MountainHOC.js.map