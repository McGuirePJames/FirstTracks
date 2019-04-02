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
require("../SkiResortImageCard/_skiResortImageCard.scss");
var react_1 = __importDefault(require("react"));
var RatingIcon_1 = require("../RatingIcon/RatingIcon");
var SkiResortImageCard = /** @class */ (function (_super) {
    __extends(SkiResortImageCard, _super);
    function SkiResortImageCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SkiResortImageCard.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "image-card" },
            react_1.default.createElement("img", { className: "image-card__image", src: this.props.skiResort.imageFilePath }),
            react_1.default.createElement("div", { className: "image-card__details" },
                react_1.default.createElement("div", { className: "image-card__top" },
                    react_1.default.createElement("p", { className: "image-card__name" }, this.props.skiResort.name),
                    react_1.default.createElement("div", { className: "image-card__rating" },
                        react_1.default.createElement(RatingIcon_1.RatingIcon, { filledState: 100 }),
                        react_1.default.createElement(RatingIcon_1.RatingIcon, { filledState: 100 }),
                        react_1.default.createElement(RatingIcon_1.RatingIcon, { filledState: 100 }),
                        react_1.default.createElement(RatingIcon_1.RatingIcon, { filledState: 50 }),
                        react_1.default.createElement(RatingIcon_1.RatingIcon, { filledState: 0 }))),
                react_1.default.createElement("div", { className: "image-card__middle" },
                    react_1.default.createElement("div", { className: "image-card__tags" }, this.props.skiResort.tags.map(function (tag, i) {
                        return (react_1.default.createElement("div", { className: "image-card__tag", key: i }, tag));
                    }))),
                react_1.default.createElement("div", { className: "image-card__bottom" },
                    react_1.default.createElement("a", { className: "image-card__learn-more", href: this.props.skiResort.mountainHref }, "Learn More")))));
    };
    return SkiResortImageCard;
}(react_1.default.Component));
exports.SkiResortImageCard = SkiResortImageCard;
//# sourceMappingURL=SkiResortImageCard.js.map