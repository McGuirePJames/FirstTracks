"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCompleteUrl(url, data) {
    var newUrl = new URL(url);
    data.forEach(function (keyValue) {
        newUrl.searchParams.append(Object.keys(keyValue)[0], keyValue[Object.keys(keyValue)[0]]);
    });
    return newUrl.href;
}
exports.getCompleteUrl = getCompleteUrl;
function request(requestParameters) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(requestParameters.type, requestParameters.data !== null ? getCompleteUrl(requestParameters.url, requestParameters.data) : requestParameters.url, true);
        if (requestParameters.headers) {
            Object.keys(requestParameters.headers).forEach(function (key) {
                request.setRequestHeader(key, requestParameters.headers[key]);
            });
        }
        request.onload = function () {
            if (request.status >= 200 && request.status <= 300) {
                resolve({
                    status: request.status,
                    response: request.response
                });
            }
            else {
                reject({
                    status: request.status,
                    response: request.response
                });
            }
        };
        if (requestParameters.type === 'POST') {
            //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        request.send();
    });
}
exports.request = request;
//# sourceMappingURL=request.js.map