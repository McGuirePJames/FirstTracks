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
require("../Mountain/_mountain.scss");
var request_1 = require("../../Common/request");
var getQueryStringParameter_1 = require("../../Common/getQueryStringParameter");
var MountainHOC = /** @class */ (function (_super) {
    __extends(MountainHOC, _super);
    function MountainHOC(props) {
        var _this = _super.call(this, props) || this;
        _this.setSkiResort = function () {
            var mountainId = getQueryStringParameter_1.getQueryStringParameter(window.location, "skiResortId");
            var parameters = {
                type: "GET",
                url: "https://localhost:44347/api/Mountain/GetMountainAsync",
                data: [{ "mountainId": mountainId }],
                headers: null
            };
            request_1.request(parameters).then(function (response) {
                _this.setState({
                    skiResort: (JSON.parse(response.response))
                });
            });
        };
        _this.state = {
            skiResort: null
        };
        return _this;
    }
    MountainHOC.prototype.componentWillMount = function () {
        this.setSkiResort();
    };
    MountainHOC.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "mountain-hoc" }, this.state.skiResort !== null ?
            (react_1.default.createElement("p", null, this.state.skiResort.name))
            : null));
    };
    return MountainHOC;
}(react_1.default.Component));
exports.MountainHOC = MountainHOC;
//# sourceMappingURL=MountainHOC.js.map