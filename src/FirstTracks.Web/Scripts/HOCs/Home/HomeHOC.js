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
var HomeHOC = /** @class */ (function (_super) {
    __extends(HomeHOC, _super);
    function HomeHOC(props) {
        var _this = _super.call(this, props) || this;
        _this.createUser = function () {
            var parameters = {
                type: "POST",
                url: "https://localhost:44347/api/Account/CreateUser",
                data: [{ "emailAddress": "HelloWorld@bla.com" }, { "password": "SuperSecurePassword1234!" }],
                headers: null
            };
            request_1.request(parameters).then(function (response) {
                console.log(response.response);
            });
        };
        _this.state = {};
        return _this;
    }
    HomeHOC.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "home-hoc" },
            react_1.default.createElement(Button_1.Button, { buttonText: "Create User", onClick: this.createUser })));
    };
    return HomeHOC;
}(react_1.default.Component));
exports.HomeHOC = HomeHOC;
exports.default = HomeHOC;
