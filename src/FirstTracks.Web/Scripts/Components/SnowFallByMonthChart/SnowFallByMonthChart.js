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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var GridContainer_1 = __importDefault(require("../GridContainer/GridContainer"));
require("../SnowfallByMonthChart/_snowfallByMonthChart.scss");
var SnowfallByMonthChart = /** @class */ (function (_super) {
    __extends(SnowfallByMonthChart, _super);
    function SnowfallByMonthChart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SnowfallByMonthChart.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "snowfall-by-month-chart" },
            react_1.default.createElement(GridContainer_1.default, null,
                react_1.default.createElement("p", null, this.props.skiResortSnowfall[0].skiResortSnowfallId))));
    };
    return SnowfallByMonthChart;
}(react_1.Component));
exports.SnowfallByMonthChart = SnowfallByMonthChart;
exports.default = SnowfallByMonthChart;
//# sourceMappingURL=SnowfallByMonthChart.js.map