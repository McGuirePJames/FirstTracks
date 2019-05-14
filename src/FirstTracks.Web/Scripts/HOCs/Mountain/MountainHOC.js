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
require("../../../Stylesheets/global.scss");
require("../Mountain/_mountainHOC.scss");
var request_1 = require("../../Common/request");
var getQueryStringParameter_1 = require("../../Common/getQueryStringParameter");
var TrailDifficultyPieChart_1 = __importDefault(require("../../Components/TrailDifficultyPieChart/TrailDifficultyPieChart"));
var SnowfallByMonthChart_1 = require("../../Components/SnowfallByMonthChart/SnowfallByMonthChart");
var MountainHOC = /** @class */ (function (_super) {
    __extends(MountainHOC, _super);
    function MountainHOC(props) {
        var _this = _super.call(this, props) || this;
        _this.getPieChartData = function () {
            console.log(_this.state.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Beginner'; }).length);
            var chartData = {
                labels: [
                    'Beginner',
                    'Intermediate',
                    'Advanced',
                    'Expert'
                ],
                datasets: [
                    {
                        data: [
                            _this.state.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Beginner'; }).length,
                            _this.state.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Intermediate'; }).length,
                            _this.state.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Advanced'; }).length,
                            _this.state.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Expert'; }).length
                        ],
                        backgroundColor: [
                            '#39B54A',
                            '#0F75BC',
                            '#B50000',
                            '#000000'
                        ],
                        hoverBackgroundColor: [
                            '#39B54A',
                            '#0F75BC',
                            '#B50000',
                            '#000000'
                        ]
                    }
                ]
            };
            return chartData;
        };
        _this.setSkiResort = function () {
            var skiResortId = getQueryStringParameter_1.getQueryStringParameter(window.location, "skiResortId");
            var parameters = {
                type: "GET",
                url: "https://localhost:44347/api/SkiResort/GetSkiResortAsync",
                data: [{ "skiResortId": skiResortId }],
                headers: null
            };
            request_1.request(parameters).then(function (response) {
                _this.setState({
                    skiResort: (JSON.parse(response.response))
                });
            });
        };
        _this.setSkiResortSnowfall = function () {
            var skiResortId = getQueryStringParameter_1.getQueryStringParameter(window.location, "skiResortId");
            var parameters = {
                type: "GET",
                url: "https://localhost:44347/api/SkiResortSnowfall/GetSkiResortSnowfallAsync",
                data: [{ "skiResortId": skiResortId }],
                headers: null
            };
            request_1.request(parameters).then(function (response) {
                _this.setState({
                    skiResortSnowfall: (JSON.parse(response.response))
                });
            });
        };
        _this.state = {
            skiResort: null,
            skiResortSnowfall: []
        };
        return _this;
    }
    MountainHOC.prototype.componentWillMount = function () {
        this.setSkiResort();
        this.setSkiResortSnowfall();
    };
    MountainHOC.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "mountain-hoc" },
            this.state.skiResort !== null ?
                (react_1.default.createElement(TrailDifficultyPieChart_1.default, { skiResort: this.state.skiResort }))
                :
                    null,
            this.state.skiResortSnowfall.length > 0 ?
                (react_1.default.createElement(SnowfallByMonthChart_1.SnowfallByMonthChart, { skiResortSnowfall: this.state.skiResortSnowfall }))
                :
                    null));
    };
    return MountainHOC;
}(react_1.default.Component));
exports.MountainHOC = MountainHOC;
//# sourceMappingURL=MountainHOC.js.map