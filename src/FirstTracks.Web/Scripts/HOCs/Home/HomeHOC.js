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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        _this.getMountains = function () { return __awaiter(_this, void 0, void 0, function () {
            var parameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parameters = {
                            type: "GET",
                            url: "https://localhost:44347/api/Mountain/GetMountainsAsync",
                            data: null,
                            headers: null
                        };
                        return [4 /*yield*/, request_1.request(parameters)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response.response)];
                }
            });
        }); };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.setState;
                        _b = {};
                        return [4 /*yield*/, this.getMountains()];
                    case 1:
                        _a.apply(this, [(_b.skiResorts = _c.sent(),
                                _b)]);
                        return [2 /*return*/];
                }
            });
        }); };
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
                react_1.default.createElement("h2", { className: "section__title" }, "Recommended Mountains"),
                react_1.default.createElement(SkiResortCarousel_1.SkiResortCarousel, { skiResorts: this.state.skiResorts }))));
    };
    return HomeHOC;
}(react_1.default.Component));
exports.HomeHOC = HomeHOC;
//# sourceMappingURL=HomeHOC.js.map