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
require("../TrailDifficultyPieChart/_trailDifficultyPieChart.scss");
var react_chartjs_2_1 = require("react-chartjs-2");
var GridContainer_1 = __importDefault(require("../GridContainer/GridContainer"));
var TrailDifficultyPieChart = /** @class */ (function (_super) {
    __extends(TrailDifficultyPieChart, _super);
    function TrailDifficultyPieChart(props) {
        var _this = _super.call(this, props) || this;
        _this.getPieChartData = function () {
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
                            _this.props.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Beginner'; }).length,
                            _this.props.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Intermediate'; }).length,
                            _this.props.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Advanced'; }).length,
                            _this.props.skiResort.trails.filter(function (x) { return x['difficulty'] === 'Expert'; }).length
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
        _this.state = {
            skiResort: null
        };
        return _this;
    }
    TrailDifficultyPieChart.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "trail-difficulty-pie-chart" },
            react_1.default.createElement(GridContainer_1.default, null,
                react_1.default.createElement("div", { className: "chart-container" },
                    react_1.default.createElement(react_chartjs_2_1.Pie, { data: this.getPieChartData(), options: {
                            title: {
                                text: "Trail Difficulty",
                                fontSize: 20,
                                display: true
                            },
                            layout: {
                                padding: {
                                    left: 30,
                                    top: 30,
                                    right: 30,
                                    bottom: 30
                                }
                            },
                            responsive: true,
                            maintainAspectRatio: false
                        }, legend: {
                            labels: {
                                fontSize: 10
                            }
                        } })))));
    };
    return TrailDifficultyPieChart;
}(react_1.default.Component));
exports.TrailDifficultyPieChart = TrailDifficultyPieChart;
exports.default = TrailDifficultyPieChart;
//# sourceMappingURL=TrailDifficultyPieChart.js.map