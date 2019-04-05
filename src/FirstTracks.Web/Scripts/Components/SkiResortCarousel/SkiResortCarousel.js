"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var SkiResortImageCard_1 = require("../SkiResortImageCard/SkiResortImageCard");
require("../SkiResortCarousel/_skiResortCarousel.scss");
var SkiResortCarousel = /** @class */ (function (_super) {
    __extends(SkiResortCarousel, _super);
    function SkiResortCarousel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SkiResortCarousel.prototype.render = function () {
        console.log('from carousel');
        console.log(this.props.skiResorts);
        return (react_1.default.createElement("div", { className: "ski-resort-carousel" },
            react_1.default.createElement("div", { className: "mountains" }, this.props.skiResorts != null && this.props.skiResorts != undefined ? (this.props.skiResorts.map(function (skiResort, i) {
                return (react_1.default.createElement("div", { key: i, className: "mountain" },
                    react_1.default.createElement(SkiResortImageCard_1.SkiResortImageCard, { skiResort: skiResort, key: i })));
            }))
                : null)));
    };
    return SkiResortCarousel;
}(react_1.default.Component));
exports.SkiResortCarousel = SkiResortCarousel;
//# sourceMappingURL=SkiResortCarousel.js.map