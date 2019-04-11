"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQueryStringParameter(location, paramKey) {
    var urlParams = new URLSearchParams(location.search);
    return urlParams.get(paramKey);
}
exports.getQueryStringParameter = getQueryStringParameter;
//# sourceMappingURL=getQueryStringParameter.js.map