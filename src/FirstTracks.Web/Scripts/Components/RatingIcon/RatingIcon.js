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
Object.defineProperty(exports, "__esModule", { value: true });
require("../RatingIcon/_ratingIcon.scss");
var react_1 = __importStar(require("react"));
var RatingIcon = /** @class */ (function (_super) {
    __extends(RatingIcon, _super);
    function RatingIcon(props) {
        var _this = _super.call(this, props) || this;
        _this._refMount = react_1.createRef();
        _this.getSvgElement = function () {
            //at the time of writing this, react does not support svg need to find better way to do this
            var svgString = '<div class="rating-icon-container"><svg class="rating-icon-source" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><g id="ratingIconPath"><path d="M12 48 L56 48 L40 22 L36 32 L26 16 Z" /></g><linearGradient id="emptyGradient"><stop stop-opacity="1" offset="50%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="50%"></stop></linearGradient><linearGradient id="quarterGradient"><stop stop-opacity="1" offset="25%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="25%"></stop></linearGradient><linearGradient id="halfGradient"><stop stop-opacity="1" offset="50%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="50%"></stop></linearGradient><linearGradient id="halfQuarterGradient"><stop stop-opacity="1" offset="75%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="75%"></stop></linearGradient><linearGradient id="fullGradient"><stop stop-opacity="1" offset="100%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="100%"></stop></linearGradient></svg><div><svg class="rating-icons" viewBox="0 0 60 50"><use xlink: href="#ratingIconPath" class="rating-icon" x="0" y="0" /></svg></div></div>';
            var parser = new DOMParser();
            return parser.parseFromString(svgString, 'text/html').getElementsByClassName('rating-icon-container')[0];
        };
        _this.addRating = function (svgElement) {
            var ratingIcon = svgElement.getElementsByClassName('rating-icon')[0];
            switch (_this.props.filledState) {
                case 0:
                    ratingIcon.classList.add('rating-icon--empty');
                    break;
                case 25:
                    ratingIcon.classList.add('rating-icon--quarter');
                    break;
                case 50:
                    ratingIcon.classList.add('rating-icon--half');
                    break;
                case 75:
                    ratingIcon.classList.add('rating-icon--half-quarter');
                    break;
                case 100:
                    ratingIcon.classList.add('rating-icon--full');
                    break;
                default:
                    break;
            }
            return svgElement;
        };
        _this.state = {};
        return _this;
    }
    RatingIcon.prototype.componentDidMount = function () {
        var svg = this.getSvgElement();
        var svgWithRating = this.addRating(svg);
        this._refMount.current.appendChild(svgWithRating);
    };
    RatingIcon.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "rating-icon-component", ref: this._refMount }));
    };
    return RatingIcon;
}(react_1.default.Component));
exports.RatingIcon = RatingIcon;
//# sourceMappingURL=RatingIcon.js.map