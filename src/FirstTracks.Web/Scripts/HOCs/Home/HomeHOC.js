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
var request_1 = require("../../Common/request");
require("../../../Stylesheets/global.scss");
var Button_1 = require("../../Components/Button/Button");
require("../Home/_homeHOC.scss");
var NavigationBar_1 = require("../../Components/NavigationBar/NavigationBar");
var NavigationLink_1 = require("../../Models/NavigationLink/NavigationLink");
var SkiResortCarousel_1 = require("../../Components/SkiResortCarousel/SkiResortCarousel");
var HomeHOC = /** @class */ (function (_super) {
    __extends(HomeHOC, _super);
    function HomeHOC(props) {
        var _this = _super.call(this, props) || this;
        _this.setSkiResorts = function () {
            var parameters = {
                type: "GET",
                url: "https://localhost:44347/api/SkiResort/GetSkiResortsAsync",
                data: null,
                headers: null
            };
            request_1.request(parameters).then(function (response) {
                _this.setState({
                    skiResorts: (JSON.parse(response.response))
                });
            });
        };
        _this.componentDidMount = function () {
            _this.setSkiResorts();
        };
        _this.state = {
            skiResorts: []
        };
        return _this;
    }
    HomeHOC.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "home-hoc" },
            react_1.default.createElement("div", { className: "welcome" },
                react_1.default.createElement("div", { className: "welcome__image-container" },
                    react_1.default.createElement("img", { className: "welcome__image", src: "/images/city.jpg" })),
                react_1.default.createElement("div", { className: "welcome__pieces" },
                    react_1.default.createElement("div", { className: "welcome__navigation" },
                        react_1.default.createElement("div", { className: "welcome__logo-container" },
                            react_1.default.createElement("img", { className: "welcome__logo", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png" })),
                        react_1.default.createElement("div", { className: "welcome__navigation-container" },
                            react_1.default.createElement(NavigationBar_1.NavigationBar, { navigationItems: [
                                    new NavigationLink_1.NavigationLink("/Mountains", "Mountains", null),
                                    new NavigationLink_1.NavigationLink("/Forums", "Forums", null),
                                    new NavigationLink_1.NavigationLink("/AboutUs", "About Us", null)
                                ] }))),
                    react_1.default.createElement("div", { className: "welcome__slogan-container" },
                        react_1.default.createElement("p", { className: "welcome__slogan" }, "Be The"),
                        react_1.default.createElement("p", { className: "welcome__slogan" }, "First"),
                        react_1.default.createElement("p", { className: "welcome__slogan" }, "On The Slopes")),
                    react_1.default.createElement("div", { className: "welcome__button-container" },
                        react_1.default.createElement(Button_1.Button, { size: "godzilla", text: "Find Users", onClickCustom: function () { } })))),
            react_1.default.createElement("div", { className: "section" },
                react_1.default.createElement("h2", { className: "section__title" }, "Recommended Ski Resorts"),
                react_1.default.createElement(SkiResortCarousel_1.SkiResortCarousel, { skiResorts: this.state.skiResorts }))));
    };
    return HomeHOC;
}(react_1.default.Component));
exports.HomeHOC = HomeHOC;
//# sourceMappingURL=HomeHOC.js.map